import winston from 'winston'

const logger = winston.createLogger({

    level: 'info',

    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),

        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}] ${message}`
        })
    ),

    transports: [

        // Console
        new winston.transports.Console(),

        // Log file
        new winston.transports.File({
            filename: 'logs/test.log'
        })
    ]
})

export default logger