const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

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

  // Dynamic project info based on source/landing page
  let projectName = 'AU Cosmos Corner';
  let projectLocation = 'Siddharth Vihar, Delhi-Meerut Expressway, Ghaziabad';
  let projectPrice = '₹6900/SqFt';

  const subject = `New Lead | ${projectName} | ${source || 'Website'}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">

      <!-- Header -->
      <div style="background: #c0392b; padding: 20px 24px;">
        <h2 style="color: #fff; margin: 0; font-size: 20px;">New Lead Received</h2>
        <p style="color: #f5b7b1; margin: 4px 0 0; font-size: 13px;">${projectName} — ${projectLocation}</p>
      </div>

      <!-- Lead Details -->
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
            <td style="padding: 10px 0; font-size: 14px; color: #222;">
              <span style="background: #fef3c7; color: #92400e; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">${source || 'Website'}</span>
            </td>
          </tr>
        </table>
      </div>

      <!-- Footer -->
      <div style="background: #f9f9f9; padding: 16px 24px; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">Current Price: <strong style="color: #c0392b;">${projectPrice}</strong> &nbsp;|&nbsp; ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        <p style="margin: 6px 0 0; font-size: 12px; color: #bbb;">AU Real Estate — aurealestateprojects.in</p>
      </div>

    </div>
  `;

  return { subject, html };
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false });

  const { full_name, phone, email, interested_in, purpose, timeline, message, source } = req.body;

  // Save to Supabase
  const { error } = await supabase
    .from('enquiries')
    .insert([{ full_name, phone, email, interested_in, purpose, timeline, message, source }]);

  if (error) return res.status(500).json({ success: false, error: error.message });

  // Send admin notification email
  let emailStatus = 'not_attempted';
  try {
    console.log('[email] SMTP config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? process.env.SMTP_USER.slice(0, 5) + '***' : 'MISSING',
      pass: process.env.SMTP_PASS ? '***set***' : 'MISSING',
      to: process.env.ADMIN_EMAIL || 'MISSING',
    });

    const { subject, html } = getEmailContent(source, { full_name, phone, email, interested_in, purpose, timeline, message });

    const info = await transporter.sendMail({
      from: `"AU Real Estate Leads" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject,
      html,
    });

    emailStatus = 'sent';
    console.log('[email] sent successfully. messageId:', info.messageId);
  } catch (emailErr) {
    emailStatus = 'failed';
    console.error('[email] send failed:', emailErr.message, emailErr.code || '');
  }

  return res.status(200).json({ success: true, message: 'Enquiry saved!', emailStatus });
};
