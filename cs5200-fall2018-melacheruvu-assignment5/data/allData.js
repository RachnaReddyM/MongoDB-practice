const alice ={
    _id:123,
    username:"alice",
    password:"alice",
    firstName:"Alice",
    lastName:"Wonderland",
    gradYear: 2020,
    scholarship:15000
};

const bob ={
    _id:234,
    username:"bob",
    password:"bob",
    firstName:"Bob",
    lastName:"Hope",
    gradYear: 2021,
    scholarship:12000
};

const question321truefalse={
    isTrue:false
};

const question321= {
    _id:321,
    question:"Is the following schema valid?",
    points: 10,
    type:"TRUE_FALSE"
};

const question432truefalse={
    isTrue:false
};

const question432= {
    _id:432,
    question:"DAO stands for Dynamic Access Object.",
    points: 10,
    type:"TRUE_FALSE"
};

const question543choice={
    choices:"Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations",
    correct:1
};

const question543={
    _id:543,
    question:"What does JPA stand for?",
    points: 10,
    type:"MULTIPLE_CHOICE"
};

const question654choice={
    choices:"Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping",
    correct:4
};

const question654={
    _id:654,
    question:"What does ORM stand for?",
    points: 10,
    type:"MULTIPLE_CHOICE"
};

const answer123={
    _id:123,
    trueFalseAnswer: true
};

const answer234={
    _id:234,
    trueFalseAnswer: false
};

const answer345={
    _id:345,
    multipleChoiceAnswer: 1
};

const answer456={
    _id:456,
    multipleChoiceAnswer: 2
};

const answer567={
    _id:567,
    trueFalseAnswer: false
};

const answer678={
    _id:678,
    trueFalseAnswer: true
};

const answer789={
    _id:789,
    multipleChoiceAnswer: 3
};

const answer890={
    _id:890,
    multipleChoiceAnswer: 4
};


const allStudents  =[alice,bob];
const newquestion321 = {q:question321,c:question321truefalse};
const newquestion432 = {q:question432,c:question432truefalse};
const newquestion543 = {q:question543,c:question543choice};
const newquestion654 = {q:question654,c:question654choice};

const allQuestions = [newquestion321,newquestion432,newquestion543,newquestion654];

const newanswer123 = {a:answer123,q:321,s:123};
const newanswer234 = {a:answer234,q:432,s:123};
const newanswer345 = {a:answer345,q:543,s:123};
const newanswer456 = {a:answer456,q:654,s:123};
const newanswer567 = {a:answer567,q:321,s:234};
const newanswer678 = {a:answer678,q:432,s:234};
const newanswer789 = {a:answer789,q:543,s:234};
const newanswer890 = {a:answer890,q:654,s:234};

const allAnswers = [newanswer123,newanswer234,newanswer345,newanswer456,newanswer567,newanswer678,newanswer789,newanswer890];

const values = {allStudents,allQuestions,allAnswers};
module.exports = {values};

