const mongoose = require('mongoose');
const questionScehma = require('./question.schema.server');
const questionModel = mongoose.model('QuestionModel', questionScehma);
module.exports= {questionModel};