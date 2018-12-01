const mongoose = require('mongoose');
const quizWidgetScehma = require('./quiz-widget.schema.server');
const quizWidgetModel = mongoose.model('QuizWidgetModel', quizWidgetScehma);
module.exports= quizWidgetModel;