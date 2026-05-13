require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;

const app = express();
const PORT = process.env.PORT || 8080;
const DATA_FILE = path.join(__dirname, 'data.json');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use(cors());
// Increase limit for base64 uploads
app.use(express.json({ limit: '50mb' }));

// Serve static files from the 'uploads' directory (kept for backward compatibility/local dev)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Manual Image Upload (Base64 to Cloudinary)
app.post('/api/upload', async (req, res) => {
  const { image } = req.body;

  if (!image) {
    return res.status(400).json({ message: 'No image data provided' });
  }

  try {
    // Upload to Cloudinary directly using the base64 string
    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: 'stoodio_uploads',
    });

    res.json({ url: uploadResponse.secure_url });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    res.status(500).json({ message: 'Failed to upload image to cloud storage' });
  }
});

// Allowed entities for the admin panel
const ALLOWED_ENTITIES = ['advantages', 'sliders', 'projects', 'steps', 'services', 'vacancies'];

// Helper function to validate entity
const isValidEntity = (entity) => ALLOWED_ENTITIES.includes(entity);

// Helper function to read data
const readData = () => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return { advantages: [], sliders: [], projects: [], steps: [], services: [], vacancies: [] };
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data:', error);
    return { advantages: [], sliders: [], projects: [], steps: [], services: [], vacancies: [] };
  }
};

// Helper function to write data
const writeData = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing data:', error);
  }
};

// --- Endpoints for Admin Panel ---

app.get('/api/:entity', (req, res) => {
  const { entity } = req.params;
  if (!isValidEntity(entity)) return res.status(404).json({ message: 'Category not found' });
  const data = readData();
  res.json(data[entity] || []);
});

app.post('/api/:entity', (req, res) => {
  const { entity } = req.params;
  if (!isValidEntity(entity)) return res.status(404).json({ message: 'Category not found' });
  const data = readData();
  const newItem = { ...req.body, id: Date.now().toString() };
  if (!data[entity]) data[entity] = [];
  data[entity].push(newItem);
  writeData(data);
  res.status(201).json(newItem);
});

app.put('/api/:entity/:id', (req, res) => {
  const { entity, id } = req.params;
  if (!isValidEntity(entity)) return res.status(404).json({ message: 'Category not found' });
  const data = readData();
  const items = data[entity] || [];
  const itemIndex = items.findIndex(i => String(i.id) === String(id));
  if (itemIndex === -1) return res.status(404).json({ message: 'Item not found' });
  data[entity][itemIndex] = { ...items[itemIndex], ...req.body, id: id };
  writeData(data);
  res.json(data[entity][itemIndex]);
});

app.delete('/api/:entity/:id', (req, res) => {
  const { entity, id } = req.params;
  if (!isValidEntity(entity)) return res.status(404).json({ message: 'Category not found' });
  const data = readData();
  const items = data[entity] || [];
  const itemIndex = items.findIndex(i => String(i.id) === String(id));
  if (itemIndex === -1) return res.status(404).json({ message: 'Item not found' });
  data[entity].splice(itemIndex, 1);
  writeData(data);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Admin Panel API Server is running on port ${PORT}`);
});
