from flask import Flask, request, jsonify
import tensorflow as tf
from PIL import Image
import numpy as np
import io

app = Flask(__name__)
model = tf.keras.models.load_model('model.h5')  # Your trained model

def preprocess(img_bytes):
    image = Image.open(io.BytesIO(img_bytes)).resize((224, 224))
    img_array = np.array(image) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    img = request.files['image'].read()
    input_tensor = preprocess(img)
    prediction = model.predict(input_tensor)[0][0]
    label = 'AI-Generated' if prediction >= 0.5 else 'Real'
    return jsonify({
        'label': label,
        'confidence': float(prediction if prediction >= 0.5 else 1 - prediction)
    })

if __name__ == '__main__':
    app.run(port=5000)
