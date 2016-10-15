var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ci_tests');
module.exports = mongoose;
