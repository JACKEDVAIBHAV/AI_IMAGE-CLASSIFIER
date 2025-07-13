const express = require('express');
const multer = require('multer');
const cors = require('cors');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());

app.post('/api/classify', upload.single('image'), async (req, res) => {
  try {
    const form = new FormData();
    form.append('image', fs.createReadStream(req.file.path));

    const response = await axios.post('http://127.0.0.1:5000/predict', form, {
      headers: form.getHeaders(),
    });

    res.json(response.data);
  } catch (err) {
    console.error('Prediction Error:', err.message);
    res.status(500).json({ error: 'Failed to classify image' });
  }
});

app.listen(4000, () => {
  console.log('✅ Express backend running on http://localhost:4000');
});
