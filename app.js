const express = require('express');
const mongoose = require('mongoose');
const { swaggerUi, swaggerSpec } = require('./config/swagger');
const screenRoutes = require('./routes/screenRoutes');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Specify the views directory

// Connect to MongoDB
mongoose.connect('mongodb+srv://pd14030304:k2DEKi2TKyAYwLRA@cluster0.4poz3y9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })  
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use API routes
app.use('/api', screenRoutes);

// Setup Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Example route to render index.ejs with all screens
app.get('/', async (req, res) => {
  try {
    const response = await fetch('http://localhost:3000/api/screens');
    const screens = await response.json();
    res.render('index', { screens });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
