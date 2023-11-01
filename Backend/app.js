var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
require('dotenv').config();
require('./config/db.js')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const userRoute = require('./routes/user.route')
const roleRoute = require('./routes/role.route')
const teamRoute = require('./routes/team.route')
const coutomerRoute = require('./routes/customer.route')
var createError = require('http-errors');
app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let STATIC = path.resolve(__dirname,'build');
let INDEX = path.resolve(STATIC, 'index.html');

app.use(express.static(STATIC));

app.use('/user', userRoute); 
app.use('/role', roleRoute); 
app.use('/team', teamRoute); 
app.use('/customer', coutomerRoute); 

app.get("/*", function(req, res, next) {
  res.sendFile(INDEX);
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;