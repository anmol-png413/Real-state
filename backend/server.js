// const express = require('express');
// const cors = require('cors');
// const Database = require('better-sqlite3');

// const app = express();
// const db = new Database('enquiries.db');

// app.use(cors());
// app.use(express.json());

// // Table banao
// db.exec(`
//   CREATE TABLE IF NOT EXISTS enquiries (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     full_name TEXT NOT NULL,
//     phone TEXT NOT NULL,
//     email TEXT,
//     interested_in TEXT,
//     message TEXT,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
//   )
// `);

// // API Route
// app.post('/api/enquiry', (req, res) => {
//   const { full_name, phone, email, interested_in, message } = req.body;

//   const stmt = db.prepare(`
//     INSERT INTO enquiries (full_name, phone, email, interested_in, message)
//     VALUES (?, ?, ?, ?, ?)
//   `);

//   stmt.run(full_name, phone, email, interested_in, message);
  
//   res.json({ success: true, message: 'Enquiry saved!' });
// });

// app.listen(5000, () => {
//   console.log('Server running on port 5000 ✅');
// });

const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

// SupBase keys 
const SUPABASE_URL = 'https://zmpjoxnsavmeeoabsskb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptcGpveG5zYXZtZWVvYWJzc2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2OTg3NjgsImV4cCI6MjA5MzI3NDc2OH0.zvAhdB8VdRoTikWI763_GdhtJhiMcKMYRgRC2hmkylU';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const app = express();

app.use(cors());
app.use(express.json());

// Form data save karne ka API
app.post('/api/enquiry', async (req, res) => {
  const { full_name, phone, email, interested_in, message } = req.body;

  const { data, error } = await supabase
    .from('enquiries')
    .insert([{ full_name, phone, email, interested_in, message }]);

  if (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }

  res.json({ success: true, message: 'Enquiry saved!' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000 ✅');
});