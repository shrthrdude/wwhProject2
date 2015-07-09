var Book = require('../dbModels/Book');

module.exports = {
  create: function(req, res) {
    console.log(121213213, req.body)
    var newBook = new Book(req.body);
    newBook.save( function(err, result) {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  },

  read: function(req, res) {
    console.log('req.query: ', req.query);
    Book
    .find(req.query)
    .populate('user')
    .exec(function(err, result) {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  },

  update: function(req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  },

  delete: function(req, res) {
    Book.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }
};