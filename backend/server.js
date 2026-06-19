require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function getEmailContent(source, data) {
  const { full_name, phone, email, interested_in, purpose, timeline, message } = data;

  const projectName = 'AU Cosmos Corner';
  const projectLocation = 'Siddharth Vihar, Delhi-Meerut Expressway, Ghaziabad';
  const projectPrice = '₹6900/SqFt';

  const subject = `New Lead | ${projectName} | ${source || 'Website'}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background: #c0392b; padding: 20px 24px;">
        <h2 style="color: #fff; margin: 0; font-size: 20px;">New Lead Received</h2>
        <p style="color: #f5b7b1; margin: 4px 0 0; font-size: 13px;">${projectName} — ${projectLocation}</p>
      </div>
      <div style="padding: 24px; background: #fff;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; width: 140px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; font-size: 15px; color: #222;">${full_name || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; font-size: 15px; color: #c0392b;">${phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #222;">${email || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Interested In</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #222;">${interested_in || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Purpose</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #222;">${purpose || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Timeline</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #222;">${timeline || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Message</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #222;">${message || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 13px;">Lead Source</td>
            <td style="padding: 10px 0;">
              <span style="background: #fef3c7; color: #92400e; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">${source || 'Website'}</span>
            </td>
          </tr>
        </table>
      </div>
      <div style="background: #f9f9f9; padding: 16px 24px; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">Current Price: <strong style="color: #c0392b;">${projectPrice}</strong> &nbsp;|&nbsp; ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        <p style="margin: 6px 0 0; font-size: 12px; color: #bbb;">AU Real Estate — aurealestateprojects.in</p>
      </div>
    </div>
  `;

  return { subject, html };
}

app.post('/api/enquiry', async (req, res) => {
  const { full_name, phone, email, interested_in, purpose, timeline, message, source } = req.body;

  const { error } = await supabase
    .from('enquiries')
    .insert([{ full_name, phone, email, interested_in, purpose, timeline, message, source }]);

  if (error) {
    return res.status(500).json({ success: false, error: error.message });
  }

  // Send admin notification email (non-blocking)
  try {
    const { subject, html } = getEmailContent(source, { full_name, phone, email, interested_in, purpose, timeline, message });
    await transporter.sendMail({
      from: `"AU Real Estate Leads" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject,
      html,
    });
    console.log('Email sent for lead:', full_name);
  } catch (emailErr) {
    console.error('Email send failed:', emailErr.message);
  }

  return res.status(200).json({ success: true, message: 'Enquiry saved!' });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
