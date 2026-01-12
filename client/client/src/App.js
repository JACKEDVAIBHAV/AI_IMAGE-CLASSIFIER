import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:4000/api/classify', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert('Error classifying image');
    }
    setLoading(false);
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setResult(null);
    if (selected) {
      setPreview(URL.createObjectURL(selected));
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🧠 AI Image Detector</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="file" accept="image/*" onChange={handleFileChange} style={styles.input} />
        {preview && <img src={preview} alt="Preview" style={styles.image} />}
        <button type="submit" disabled={!file || loading} style={styles.button}>
          {loading ? '🔍 Classifying...' : '🚀 Classify Image'}
        </button>
      </form>

      {result && (
        <div style={styles.resultCard}>
          <h2 style={{ color: result.label === 'AI-Generated' ? '#f44336' : '#4caf50' }}>
            {result.label}
          </h2>
          <p style={styles.confidence}>
            Confidence: {(result.confidence * 100).toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#121212',
    minHeight: '100vh',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    fontSize: '36px',
    marginBottom: '30px',
  },
  form: {
    backgroundColor: '#1e1e1e',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
    width: '320px',
    textAlign: 'center',
  },
  input: {
    marginBottom: '20px',
    color: '#fff',
  },
  image: {
    width: '100%',
    maxHeight: '250px',
    objectFit: 'contain',
    borderRadius: '10px',
    marginBottom: '20px',
    border: '2px solid #555',
  },
  button: {
    backgroundColor: '#6200ee',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  },
  resultCard: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#1f1f1f',
    borderRadius: '12px',
    textAlign: 'center',
    width: '320px',
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
  },
  confidence: {
    fontSize: '18px',
    marginTop: '10px',
  },
};

export default App;
