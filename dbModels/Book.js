var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  ISBN: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);