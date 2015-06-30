// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// Controllers
var LibCtrl = require('./dbControllers/LibCtrl');

// Express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoints
app.post('/library', LibCtrl.create);
app.get('/library', LibCtrl.read);
app.put('/library/:id', LibCtrl.update);
app.delete('/library/:id', LibCtrl.delete);

// Connections
var port = 2015;
var mongoUri = 'mongodb://localhost:27017/wwh';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(port, function() {
  console.log('Listening on port ', port);
});
