import { createClient } from '@supabase/supabase-js';
import { createServer } from 'http';
import nodemailer from 'nodemailer';

const SUPABASE_URL = 'https://zmpjoxnsavmeeoabsskb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptcGpveG5zYXZtZWVvYWJzc2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2OTg3NjgsImV4cCI6MjA5MzI3NDc2OH0.zvAhdB8VdRoTikWI763_GdhtJhiMcKMYRgRC2hmkylU';
const SMTP_USER = 'walia3433@gmail.com';
const SMTP_PASS = 'riknfvcrnbnkpbql';
const ADMIN_EMAIL = 'omvir.shishodia@truelitestates.com,sharma.rahul8670@gmail.com,anmolwalia511@gmail.com';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

function buildEmailHtml(source, data) {
  const { full_name, phone, email, interested_in, purpose, timeline, message } = data;
  return {
    subject: `New Lead | AU Cosmos Corner | ${source || 'Website'}`,
    html: `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
      <div style="background:#c0392b;padding:20px 24px;">
        <h2 style="color:#fff;margin:0;font-size:20px;">New Lead Received</h2>
        <p style="color:#f5b7b1;margin:4px 0 0;font-size:13px;">AU Cosmos Corner — Siddharth Vihar, Ghaziabad</p>
      </div>
      <div style="padding:24px;background:#fff;">
        <table style="width:100%;border-collapse:collapse;">
          ${[['Name',full_name],['Phone',phone],['Email',email],['Interested In',interested_in],['Purpose',purpose],['Timeline',timeline],['Message',message]].map(([k,v])=>`
          <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:13px;width:140px;">${k}</td>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#222;">${v||'—'}</td></tr>`).join('')}
          <tr><td style="padding:10px 0;color:#888;font-size:13px;">Source</td>
          <td style="padding:10px 0;"><span style="background:#fef3c7;color:#92400e;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600;">${source||'Website'}</span></td></tr>
        </table>
      </div>
      <div style="background:#f9f9f9;padding:16px 24px;border-top:1px solid #eee;">
        <p style="margin:0;font-size:12px;color:#999;">${new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'})} IST</p>
      </div>
    </div>`
  };
}

const server = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }
  if (req.url !== '/api/enquiry' || req.method !== 'POST') {
    res.writeHead(404); res.end(); return;
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    try {
      const { full_name, phone, email, interested_in, purpose, timeline, message, source } = JSON.parse(body);
      const { error } = await supabase.from('enquiries').insert([{ full_name, phone, email, interested_in, purpose, timeline, message, source }]);
      if (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, error: error.message }));
      }
      // Send email notification (non-blocking)
      try {
        const { subject, html } = buildEmailHtml(source, { full_name, phone, email, interested_in, purpose, timeline, message });
        await transporter.sendMail({ from: `"AU Real Estate Leads" <${SMTP_USER}>`, to: ADMIN_EMAIL, subject, html });
        console.log('Email sent for lead:', full_name);
      } catch (emailErr) {
        console.error('Email send failed:', emailErr.message);
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'Enquiry saved!' }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: e.message }));
    }
  });
});

server.listen(3001, () => console.log('Local API running on http://localhost:3001'));
