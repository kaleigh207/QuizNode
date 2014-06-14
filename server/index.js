(function() {
  'use strict';

  var db = require('./db/index.js');

  module.exports = {
    'ready': function(cb) {
      db.ready(function() {
        var Quiz = db.Quiz;

        cb({
          serve: function(req, res) {
            Quiz.find({}, function(err, quizes) {
              if(err) return res.end(err);
              return res.end(JSON.stringify(quizes));
            });
          }
        });
      });
    }
  };

  //new mongoose.Quiz({ 'title': 'quiz test', groups: ['test'], questions: []});
  
})();
