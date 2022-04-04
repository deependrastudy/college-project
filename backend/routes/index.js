const express = require('express');
const frontController = require('../controller/front');
const app = express();
app.get('/',frontController.list);
module.exports = app;