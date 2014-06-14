var mongoose = require('mongoose');

mongoose.connect('mongodb://quiznode:qu13n0d3r@ds033037.mongolab.com:33037/quiznode');
mongoose.Quiz = mongoose.model('Quiz', {
  'title': String, 
  'groups': Array, 
  'questions': Array
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
mongoose.ready = function(cb) {
  db.once('open', cb);
};

module.exports = mongoose;

