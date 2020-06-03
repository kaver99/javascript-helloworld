const express = require('express');
const path = require('path');
const app = express();

const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
const DATE = moment().format('YYYY-MM-DD HH:mm:ss');

const logger = require('./middleware/logger');
// Init middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'dev/public')));

// Members API Routes
app.use('/api/members', require('./routers/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`${DATE} Express Server is running. http://127.0.0.1:${PORT}`));