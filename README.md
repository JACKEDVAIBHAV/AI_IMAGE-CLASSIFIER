# 🧠 AI Image Detector

A full-stack web application that uses **Deep Learning** to detect whether an image is **AI-generated** or **Real**. Built with React, Node.js/Express, and TensorFlow/Keras.

![Python](https://img.shields.io/badge/Python-3.8+-blue?logo=python)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-orange?logo=tensorflow)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## ✨ Features

- 🖼️ **Image Upload** – Drag & drop or select images for classification
- 🤖 **AI Detection** – Deep learning model distinguishes AI-generated vs real images
- 📊 **Confidence Score** – See how confident the model is about its prediction
- 🌙 **Dark Mode UI** – Modern, sleek dark-themed interface
- ⚡ **Real-time Results** – Fast classification with instant feedback

---

## 🏗️ Architecture

```
AI-IMAGE-DETECTOR/
├── client/              # React Frontend
│   └── client/
│       ├── public/
│       └── src/
│           └── App.js   # Main React component
├── server/              # Node.js/Express Backend
│   ├── index.js         # Express server
│   └── routes/          # API routes
├── ml_model/            # Python ML Service
│   ├── app.py           # Flask API for predictions
│   ├── model.h5         # Trained Keras model
│   └── requirements.txt # Python dependencies
└── model.h5             # Model file (root copy)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (3.8 or higher)
- **npm** or **yarn**

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/JACKEDVAIBHAV/AI_IMAGE-CLASSIFIER.git
cd AI_IMAGE-CLASSIFIER
```

#### 2️⃣ Setup ML Model Service (Flask)

```bash
cd ml_model
pip install flask tensorflow pillow numpy
python app.py
```

The ML service will run on `http://localhost:5000`

#### 3️⃣ Setup Backend Server (Node.js)

```bash
cd server
npm install
node index.js
```

The backend server will run on `http://localhost:4000`

#### 4️⃣ Setup Frontend Client (React)

```bash
cd client/client
npm install
npm start
```

The React app will run on `http://localhost:3000`

---

## 🔧 Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Click the file input to select an image
3. Click **"🚀 Classify Image"** to analyze
4. View the result showing:
   - **AI-Generated** (red) or **Real** (green)
   - Confidence percentage

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 19, Axios |
| **Backend** | Node.js, Express 5, Multer |
| **ML Service** | Python, Flask, TensorFlow/Keras |
| **Model** | CNN (Convolutional Neural Network) |

---

## 📡 API Endpoints

### Backend (Node.js) - Port 4000

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/classify` | Upload image for classification |

### ML Service (Flask) - Port 5000

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/predict` | Predict if image is AI-generated |

---

## 🧪 How It Works

1. **User uploads an image** via the React frontend
2. **Frontend sends the image** to the Node.js backend
3. **Backend forwards it** to the Flask ML service
4. **ML model processes the image**:
   - Resizes to 224x224
   - Normalizes pixel values (0-1)
   - Runs through the trained CNN
5. **Prediction is returned** with label and confidence score
6. **Result is displayed** to the user

---

## 📁 Project Structure Details

### Client (React Frontend)
- Modern React with Hooks (`useState`)
- Axios for HTTP requests
- Dark mode UI with inline styles

### Server (Node.js Backend)
- Express.js REST API
- Multer for file uploads
- CORS enabled for cross-origin requests
- Forwards requests to ML service

### ML Model (Flask Service)
- TensorFlow/Keras for deep learning
- PIL for image preprocessing
- Flask REST API

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Vaibhav**

- GitHub: [@JACKEDVAIBHAV](https://github.com/JACKEDVAIBHAV)

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

<p align="center">
  Made with ❤️ and AI
</p>
