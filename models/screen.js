const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const screenSchema = new Schema({
  screen_id: { type: String, required: true, unique: true },
  parsingcode: { type: String, required: true },
  screenstatus: { type: String, required: true },
});

screenSchema.statics.findByScreenIdAndDelete = function(screen_id) {
  return this.findOneAndDelete({ screen_id });
};

const Screen = mongoose.model('Screen', screenSchema);

module.exports = Screen;
