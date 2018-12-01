module.exports = function () {
  const mongoose = require('mongoose');
  const dbName = 'white-board';
  var connectionString='mongodb://localhost/';
  mongoose.connect(connectionString+dbName).then(response =>{
        console.log("connected => ",response);
    });
}