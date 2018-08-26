// Imports: Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Imports: Router
const router = require('./router.js');
app.use(router);


// Database: URI
const mongoURI = 'mongodb://localhost/DatabaseExample';

// Database: Connection
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true },
  // Error Handling
  function(err) {
    if(err) {
      console.log('Unable to connect to the Database. Error: ' + err);
    }
    else {
      console.log('Connected to Database.');
    }
});

// Database: Connection Test
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the Database.');
});


// Express: Port
const port = 4000 || process.env;

// Express: Listener
app.listen(port, function() {
  console.log('The server has started on port: ' + port);
});


// Exports
module.exports = APP;