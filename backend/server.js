

// require('dotenv').config();

// const express = require('express');
// const { createClient } = require('@supabase/supabase-js');

// const app = express();
// app.use(express.json());

// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_ANON_KEY
// );

// app.post('/api/enquiry', async (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   const { full_name, phone, email, interested_in, message } = req.body;

//   const { error } = await supabase
//     .from('enquiries')
//     .insert([{ full_name, phone, email, interested_in, message }]);

//   if (error) {
//     return res.status(500).json({ success: false, error: error.message });
//   }

//   return res.status(200).json({ success: true, message: 'Enquiry saved!' });
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });


require('dotenv').config();

const express = require('express');
const cors = require('cors');  // ← ADD THIS
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());        // ← ADD THIS (express.json se PEHLE)
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.post('/api/enquiry', async (req, res) => {
  // ← YEH TEEN LINES HATA DO (ab zarurat nahi)
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { full_name, phone, email, interested_in, message } = req.body;

  const { error } = await supabase
    .from('enquiries')
    .insert([{ full_name, phone, email, interested_in, message }]);

  if (error) {
    return res.status(500).json({ success: false, error: error.message });
  }

  return res.status(200).json({ success: true, message: 'Enquiry saved!' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});