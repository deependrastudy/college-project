const express = require('express');
const route = require('./routes/index');
const db = require('./database/connection')
const app = express();
app.use(route);
app.listen(2000);