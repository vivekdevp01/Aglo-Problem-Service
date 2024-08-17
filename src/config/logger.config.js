const winston=require('winston');
const { LOG_DB_URL } = require('./server.config');


require('winston-mongodb');

const allowedTransports=[];
allowedTransports.push(new winston.transports.Console(
    {
        format:winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.printf(info=>`${info.timestamp} ${info.level}: ${info.message}`) 
        )
    }
))
allowedTransports.push(new winston.transports.MongoDB(
    {
        level:'error',
        db:LOG_DB_URL,
        colections:'logs',

    }
))
allowedTransports.push(new winston.transports.File({
    filename:`app.log`
}))
const logger=winston.createLogger({
    format:winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info=>`${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports:allowedTransports
})
module.exports=logger;

