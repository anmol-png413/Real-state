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

  const { full_name, phone, email, interested_in, purpose, timeline, message, source } = req.body;

  const { error } = await supabase
    .from('enquiries')
    .insert([{ full_name, phone, email, interested_in, purpose, timeline, message, source }]);

  if (error) return res.status(500).json({ success: false, error: error.message });

  return res.status(200).json({ success: true, message: 'Enquiry saved!' });
};

// anmodule.exports.config = { 