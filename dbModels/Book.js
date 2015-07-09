var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  book: { type: String, required: true },
  author: { type: String },
  ISBN: { type: String },
  summary: { type: String }

});

module.exports = mongoose.model('Book', bookSchema);