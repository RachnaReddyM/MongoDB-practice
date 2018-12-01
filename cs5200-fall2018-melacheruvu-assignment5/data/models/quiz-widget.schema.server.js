const mongoose = require('mongoose')
const questionSchema = require('./question.schema.server')
const quizWidgetSchema = mongoose.Schema({
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    }]
}, {collection: 'quiz-widgets'});
module.exports = quizWidgetSchema;