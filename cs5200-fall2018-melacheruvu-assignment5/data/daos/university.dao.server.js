
const studentModel = require("../models/student.model.server").studentModel;
const questionModel = require("../models/question.model.server").questionModel;
const answerModel = require("../models/answer.model.server").answerModel;
const data = require("../../data/allData").values;

truncateDatabase = ()=>{
    const allPromises = [answerModel.deleteMany({}),questionModel.deleteMany({}),studentModel.deleteMany({})];
    return Promise.all(allPromises);
};

populateDatabase=()=>{

    return new Promise( (resolve, reject) => {
        createStudent(data.allStudents)
            .then((students)=>{
                return createQuestion(data.allQuestions)
            })
            .then((quest)=>{
                return answerQuestion(data.allAnswers)
            })
            .then(ans => {
                resolve("worked")
            })
            .catch( error=> {
                reject(error);
            })
    });
};


createStudent = (student) => {
    return studentModel.create(student)
};;

createAllStudents = (students) => {
    students.map(student =>{
        return createStudent(student);
    });
};

deleteStudent = (id)=> {
    return studentModel.remove({_id:id});
};

findAllStudents = _=>{
    return studentModel.find();
};

findStudentById =(id)=>{
    return studentModel.findById(id);

};

createQuestion = (questions) =>{
    const newQuestions=[];
    questions.map(question =>{
        const q = question.q;
        const c = question.c;
        if(q.type=="MULTIPLE_CHOICE")
        {
            q.multipleChoice=c;
        }
        else{
            q.trueFalse=c;
        }

        newQuestions.push(q);
    });

    return questionModel.create(newQuestions);
};

deleteQuestion =(id) => {
    return questionModel.remove({_id:id});
};

findAllQuestions = ()=>{
    return questionModel.find();
};

findQuestionById = (id) => {
    return questionModel.findById(id);
};

answerQuestion = (answers) => {
    return new Promise( (resolve, reject) =>{
        const newAnswers =[];
        answers.map((answer,index) => {
            findQuestionById(answer.q)
                .then((question) => {
                    if (question == null)
                        throw new Error("Question not found ");
                    return findStudentById(answer.s)
                })
                .then((student) => {
                    if (student == null)
                        throw new Error("Student not found ");
                    answer.a.student = answer.s;
                    answer.a.question = answer.q;
                    newAnswers.push(answer.a);
                    if (index === answers.length - 1) {
                        answerModel.create(newAnswers)
                            .then(ans => {
                                resolve("everything is fine")
                            })
                            .catch( error => {
                                reject(error);
                            });
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    });
}

deleteAnswer = (id) =>{
    return answerModel.remove({_id:id});
};

findAllAnswers = ()=>{
    return answerModel.find();
};

findAnswerById = (id) =>{
    return answerModel.findById(id);
};
findAnswersByStudent = (studentId) => {
    return answerModel.find({student:studentId});

};
findAnswersByQuestion = (questionId) =>{
    return answerModel.find({question:questionId});
};


module.exports = {
    truncateDatabase,populateDatabase,createStudent,deleteStudent,findAllStudents,findStudentById,
    createQuestion,deleteQuestion,findAllQuestions,findQuestionById,
    answerQuestion,deleteAnswer,findAllAnswers,findAnswerById,findAnswersByStudent,findAnswersByQuestion};