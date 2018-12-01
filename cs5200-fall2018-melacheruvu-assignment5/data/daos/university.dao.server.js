const studentModel = require("../models/student.model.server").studentModel;
const questionModel = require("../models/question.model.server").questionModel;
const answerModel = require("../models/answer.model.server").answerModel;



truncateDatabase = ()=>{

    answerModel.deleteMany();
    questionModel.deleteMany();
    studentModel.deleteMany();
}


createStudent = (student) => {
    studentModel.create(student);
};

createAllStudents = (students) => {
    students.map(student =>{
        return createStudent(student);
    });
};

deleteStudent = (id)=> {
    studentModel.remove({_id:id});
};

findAllStudents = _=>{
    studentModel.find();
};

findStudentById =(id)=>{
    return studentModel.findById(id);

};

createQuestion = (question) =>{
    questionModel.create(question);
};

createAllQuestions = (questions) => {
    questions.map(questions =>{
        return createQuestion(question);
    });
};

deleteQuestion =(id) => {
    questionModel.remove({_id:id});
};

findAllQuestions = _=>{
    questionModel.find();
};

findQuestionById =(id)=>{
    return questionModel.findById(id);

};

answerQuestion = (studentId, questionId, answer) => {
    findQuestionById(questionId).then((question)=>{
        if(question!=null)
        {
            findStudentById(studentId).then((student) =>{
                if(student!=null)
                {
                    answer.student=studentId;
                    answer.question=questionId;
                    answerModel.create(answer);
                }
                else
                {
                    console.log("Student with id: "+studentId+" does not exists");
                }
            });
        }
        else
        {
            console.log("Question with id: "+questionId+" does not exists");
        }
    })

};

deleteAnswer = (id) =>{
    answerModel.remove({_id:id});
};

findAllAnswers = ()=>{
    answerModel.find();
};

findAnswerById = (id) =>{
    answerModel.findById(id);
};
findAnswersByStudent = (studentId) => {
    answerModel.find({student:studentId});

};
findAnswersByQuestion = (questionId) =>{
    answerModel.find({question:questionId});
};


module.exports = {
    createStudent,deleteStudent,findAllStudents,findStudentById,
    createQuestion,deleteQuestion,findAllQuestions,findQuestionById,
    answerQuestion,deleteAnswer,findAllAnswers,findAnswerById,findAnswersByStudent,findAnswersByQuestion};