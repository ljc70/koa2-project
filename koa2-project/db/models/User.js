const db = require('../db');

module.exports = db.defineModel('users', {
    // email: {
    //     type: db.STRING(100),
    //     unique: true
    // },
    name: db.STRING(100),
    passwd: db.STRING(100),
    avator:db.STRING(100),
    nickname: db.STRING(100),
});