require('./db')();
const universityDao = require('./daos/university.dao.server');

universityDao.createStudent(alice);