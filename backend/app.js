const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/index');
const db = require('./database/connection');
const path = require('path');
const app = express();
var cors = require('cors')
const expressValidator = require('express-validator');
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(route);
app.listen(2000);