var http = require('http');

var db = require('./db/index.js');

db.ready(function() {
  var Quiz = db.Quiz;

  http.createServer(function(req, res) {
    Quiz.find({}, function(err, quizes) {
      if(err) return res.end(err);
      return res.end(JSON.stringify(quizes));
    });
  }).listen(8080);

});

//var quiz = new mongoose.Quiz({ 'title': 'quiz test', groups: ['test'], questions: []});


