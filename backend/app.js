const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/index');
const db = require('./database/connection')
const app = express();
var cors = require('cors')
const expressValidator = require('express-validator');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(route);
app.listen(2000);