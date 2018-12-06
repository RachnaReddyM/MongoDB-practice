require('./db')();
const universityDao = require('./daos/university.dao.server');
const assert = require('assert');

universityDao.truncateDatabase().then((here)=>{console.log("here===="+here);
    universityDao.populateDatabase().then(()=>{
                testAll();

    })
});

testAll=()=>
{
    //test student initial count
    testStudentsInitialCount().then((allStudents)=> {
        return assert.deepStrictEqual(allStudents.length, 2);
    });

    // test Questions initial count
    testQuestionsInitialCount().then((allQuestions) => {
        assert.deepStrictEqual(allQuestions.length, 4)
    });

    // test Answers initial count
    testAnswersInitialCount().then((allAnswers) => {
        assert.deepStrictEqual(allAnswers.length,8)
    });

    // delete bob's answer
    testDeleteAnswer().then(()=>{

        // check remaining answers count
        testAnswersInitialCount().then((allAnswers) => {
            return assert.deepStrictEqual(allAnswers.length, 7);
        });

        // check answers of bob
        universityDao.findAnswersByStudent(234).then((bobAnswers)=>{
            assert.deepStrictEqual(bobAnswers.length,3)
        });

        // delete a question
        testDeleteQuestion().then(()=> {

            // check remaining questions
            return testQuestionsInitialCount().then((remQuestions) => {
                assert.deepStrictEqual(remQuestions.length, 3)
            });
        });

        // delete bob
        testDeleteStudent().then(()=>{

            // check remaining students count
            testStudentsInitialCount().then((remStudents) => {assert.deepStrictEqual(remStudents.length, 1)
            });
        });
    });


}


testStudentsInitialCount=()=>{
    return universityDao.findAllStudents();
};

testQuestionsInitialCount=()=>{
    return universityDao.findAllQuestions();
};
testAnswersInitialCount=()=>{
    return universityDao.findAllAnswers()
};

testDeleteAnswer=()=>{
    return universityDao.deleteAnswer(890);
};

testDeleteQuestion=()=>{
    return universityDao.deleteQuestion(321);
};
testDeleteStudent=()=>{
    return universityDao.deleteStudent(234);
}