const db = require('../config/db')

function getLogin(token){
    return new Promise((resolve, reject) => {
        var queryData = `select * from user where access_token = ${token}`;
        db.query(queryData, (error, db_data) => {
            if(error){
                reject("DB ERR")
            }
            resolve(db_data)
        })
    })
}

module.exports = {
    getLogin
}