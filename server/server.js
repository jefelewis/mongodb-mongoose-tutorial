// Imports: Dependencies
const EXPRESS = require('express');
const APP = EXPRESS();
const MONGOOSE = require('mongoose');


// Database: Connection
MONGOOSE.connect(
  MONGOURI,
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
const DB = mongoose.connection;
DB.on('error', console.error.bind(console, 'connection error:'));
DB.once('open', function() {
  console.log("Connected to the Database.");
});


// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
APP.listen(PORT, function() {
  console.log('The server has started on port: ' + PORT);
});


// Exports
module.exports = APP;