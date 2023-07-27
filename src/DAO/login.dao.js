const db = require('../config/db')
const logger = require('../config/logger')

function getLogin(token){
    return new Promise((resolve, reject) => {
        var queryData = `select * from user where access_token = ${token}`;
        db.query(queryData, (error, db_data) => {
            if(error){
                logger.error(
                    'DB error [user]' +
                    '\n \t' + queryData +
                    '\n \t' + error
                )
                reject("DB ERR")
            }
            resolve(db_data)
        })
    })
}

module.exports = {
    getLogin
}