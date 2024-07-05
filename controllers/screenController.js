const Screen = require('../models/screen');

// Get all screens
exports.getAllScreens = async (req, res) => {
  try {
    const screens = await Screen.find();
    res.json(screens);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get screen by screen_id
exports.getScreenById = async (req, res) => {
  try {
    const screen = await Screen.findOne({ screen_id: req.params.screen_id });
    if (!screen) return res.status(404).json({ message: 'Screen not found' });
    res.json(screen);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new screen
exports.createScreen = async (req, res) => {
  const { screen_id, parsingcode, screenstatus } = req.body;

  // Check if screen_id is blank or missing
  if (!screen_id || screen_id.trim() === '') {
    return res.status(400).json({ message: 'screen_id is required and cannot be blank' });
  }

  try {
    const newScreen = new Screen({ screen_id, parsingcode, screenstatus });
    await newScreen.save();
    res.status(201).json(newScreen);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a screen by screen_id
exports.updateScreen = async (req, res) => {
  try {
    const updates = { ...req.body };

    // Only update screen_id if it is provided and not blank
    if (req.body.screen_id && req.body.screen_id.trim() !== '') {
      updates.screen_id = req.body.screen_id;
    } else {
      delete updates.screen_id; // Remove screen_id from updates if it's not valid
    }

    const screen = await Screen.findOneAndUpdate({ screen_id: req.params.screen_id }, updates, { new: true });
    if (!screen) return res.status(404).json({ message: 'Screen not found' });
    res.json(screen);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a screen by screen_id
exports.deleteScreenById = async (req, res) => {
  try {
    const { screen_id } = req.params;
    const screen = await Screen.findOneAndDelete({ screen_id });
    if (!screen) {
      return res.status(404).json({ message: 'Screen not found' });
    }
    res.status(200).json({ message: 'Screen deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
