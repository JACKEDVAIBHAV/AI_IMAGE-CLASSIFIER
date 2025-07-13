import tensorflow as tf
import numpy as np
from PIL import Image

model = tf.keras.models.load_model("model.h5")

def preprocess(img_path):
    image = Image.open(img_path).resize((224, 224))
    img_array = np.array(image) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

# Change 'test.jpg' to your actual image file name
img_path = "C:\\Users\\Vaibhav\\Downloads\\AI_person.jpeg"
input_tensor = preprocess(img_path)

prediction = model.predict(input_tensor)[0][0]
label = "AI-Generated" if prediction >= 0.5 else "Real"
confidence = prediction if prediction >= 0.5 else 1 - prediction

print(f"Label: {label}")
print(f"Confidence: {confidence:.2f}")
