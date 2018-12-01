const mongoose = require('mongoose');
const studentScehma = require('./student.schema.server');
const studentModel = mongoose.model('StudentModel', studentScehma);
module.exports= {studentModel};