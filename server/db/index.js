(function() {
  'use strict';
  
  var mongoose = require('mongoose'),
      mongoUser = 'quiznode',
      mongoPass = 'qu13n0d3r',
      host      = 'ds033037.mongolab.com:33037',
      dbName    = 'quiznode',
      dbUrl = 
      'mongodb://' + mongoUser + ':' + mongoPass + '@' + host + '/' + dbName,
      db = mongoose.connection;

  mongoose.Quiz = mongoose.model('Quiz', {
    'title': String, 
    'groups': Array, 
    'questions': Array
  });

  mongoose.connect(dbUrl);
  db.on('error', console.error.bind(console, 'connection error:'));
  mongoose.ready = function(cb) {
    db.once('open', cb);
  };

  module.exports = mongoose;
})();

