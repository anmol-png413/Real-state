const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false });

  const { source, event_type } = req.body;

  if (!source || !event_type) {
    return res.status(400).json({ success: false, error: 'source and event_type are required' });
  }

  const { error } = await supabase
    .from('events')
    .insert([{ source, event_type }]);

  if (error) return res.status(500).json({ success: false, error: error.message });

  return res.status(200).json({ success: true });
};
