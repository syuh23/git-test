const winston = require('winston')
require('winston-daily-rotate-file');
require('date-utils');


const logger = winston.createLogger({
    level : 'debug', //err, warn, info, http, verbose, devug log 출력
    transports:[
        new winston.transports.DailyRotateFile({
            filename : 'log/system.log',
            datePattern : 'YYYY-MM-DD',
            maxFiles: 30, //최근 30일치 로그 파일을 남김
            zippedArchive: true, //gzip 압축 여부
            format:winston.format.printf(
                info=>`${new Date().toFormat('YYYY-MM-DD HH:MI:SS')} [${info.level.toUpperCase()}] - ${info.message}`
            )
            
        }),
        new winston.transports.Console({
            format:winston.format.printf(
                info => `${new Date().toFormat('YYYY-MM-DD HH:MI:SS')} [${info.level.toUpperCase()}] - ${info.message}`
            )
        })
    ]
})

module.exports = logger