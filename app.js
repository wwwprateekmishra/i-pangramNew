var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const allRouter = require('./Route/allRoutes');

const port = 3006;
var app = express();
app.use(cors());
app.use(express.json());
app.use('/', allRouter);

app.listen(port,function(){
console.log(`Port listen on ${port}`);
});

module.exports = app;
