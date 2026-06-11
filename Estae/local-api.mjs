import { createClient } from '@supabase/supabase-js';
import { createServer } from 'http';

const SUPABASE_URL = 'https://zmpjoxnsavmeeoabsskb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptcGpveG5zYXZtZWVvYWJzc2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2OTg3NjgsImV4cCI6MjA5MzI3NDc2OH0.zvAhdB8VdRoTikWI763_GdhtJhiMcKMYRgRC2hmkylU';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const server = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }
  // Health check for Playwright webServer readiness probe
  if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }
  if (req.url !== '/api/enquiry' || req.method !== 'POST') {
    res.writeHead(404); res.end(); return;
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    try {
      const { full_name, phone, email, interested_in, purpose, timeline, message, source } = JSON.parse(body);
      const { error } = await supabase.from('enquiries').insert([{ full_name, phone, email, interested_in, purpose, timeline, message, source }]);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(error ? { success: false, error: error.message } : { success: true, message: 'Enquiry saved!' }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: e.message }));
    }
  });
});

server.listen(3001, () => console.log('Local API running on http://localhost:3001'));
