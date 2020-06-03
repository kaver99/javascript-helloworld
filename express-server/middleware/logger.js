const moment = require('moment');
require('moment-timezone');

const logger = (req, res, next) => {
    moment.tz.setDefault("Asia/Seoul");
    const DATE = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(`${DATE} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

module.exports = logger;