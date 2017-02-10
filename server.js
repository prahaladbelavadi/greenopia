var express = require('express')
  , app = express() // Web framework to handle routing requests
  , bodyParser = require('body-parser')

  , MongoClient = require('mongodb').MongoClient // Driver for connecting to MongoDB
  , routes = require('./routes'); // Routes for our application



 app.use(bodyParser());
 app.use('/',express.static(__dirname + '/greenopia'));



MongoClient.connect('mongodb://localhost:27017/greenopiaDatabase', function(err, db) {
    "use strict";
    if(err) throw err;


    // Application routes
    routes(app, db);

    app.listen(8080);
    console.log('Express server listening on port 8080');
});
