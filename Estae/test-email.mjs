import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'walia3433@gmail.com',
    pass: 'riknfvcrnbnkpbql',
  },
});

async function testEmail() {
  console.log('Testing SMTP connection...');

  try {
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
  } catch (err) {
    console.error('❌ SMTP connection failed:', err.message);
    process.exit(1);
  }

  try {
    const info = await transporter.sendMail({
      from: '"AU Real Estate Leads" <walia3433@gmail.com>',
      to: 'omvir.shishodia@truelitestates.com,sharma.rahul8670@gmail.com,anmolwalia511@gmail.com',
      subject: '🔔 Test | New Lead | AU Cosmos Corner | Hero Section',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: #c0392b; padding: 20px 24px;">
            <h2 style="color: #fff; margin: 0; font-size: 20px;">New Lead Received (TEST)</h2>
            <p style="color: #f5b7b1; margin: 4px 0 0; font-size: 13px;">AU Cosmos Corner — Siddharth Vihar, Delhi-Meerut Expressway</p>
          </div>
          <div style="padding: 24px; background: #fff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; font-size: 15px; color: #222;">Test User</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; font-size: 15px; color: #c0392b;">9999999999</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #222;">test@example.com</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Interested In</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #222;">3 BHK</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Lead Source</td>
                <td style="padding: 10px 0;">
                  <span style="background: #fef3c7; color: #92400e; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">Hero Section</span>
                </td>
              </tr>
            </table>
          </div>
          <div style="background: #f9f9f9; padding: 16px 24px; border-top: 1px solid #eee;">
            <p style="margin: 0; font-size: 12px; color: #999;">Current Price: <strong style="color: #c0392b;">₹6900/SqFt</strong> &nbsp;|&nbsp; This is a TEST email</p>
          </div>
        </div>
      `,
    });

    console.log('✅ Test email sent successfully!');
    console.log('   Message ID:', info.messageId);
    console.log('   Check inbox of all 3 admins.');
  } catch (err) {
    console.error('❌ Email send failed:', err.message);
  }
}

testEmail();
