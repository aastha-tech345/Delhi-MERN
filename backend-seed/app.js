// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const bodyParser = require('body-parser');
// const router = express.Router();
// //const mailer = require('./mailer/mailer');
// const db = require('./config/db');
// const checkAuth = require('./auth/checkAuthForSwagger');
// var swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');
// const basicAuth = require('express-basic-auth');
// let executeCronJob = require('./config/cronJob');
// const cors = require('cors');
// const app = express();
// app.disable('etag');

// // swagger definition
// const options = {
//   swaggerDefinition: {
//     // Like the one described here: https://swagger.io/specification/#infoObject
//     info: {
//       title: 'Hvd Apis',
//       version: '1.0.0',
//       description: 'Here the list of all the RestApis',
//     },
//   },
//   // List of files to be processes. You can also set globs './routes/*.js'
//   apis: ['./routes/*.js'],
//   deepLinking: true,
//   customSiteTitle: 'Hvd',
//   customCssUrl: '/public/swagger-ui-new.css'
// };

// // initialize swagger-jsdoc
// var swaggerSpec = swaggerJSDoc(options);

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// // app.use(bodyParser.json());
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

// app.use(cors());

// const indexRouter = require('./routes/index')(app, router);
// //app.use('/v1/api-docs/:user', checkAuth.swaggerAuth, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use('/v1/api-docs', basicAuth({
//   users: { [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD },
//   challenge: true,
// }), swaggerUi.serve, swaggerUi.setup(swaggerSpec, options));
// //http://localhost:4042/v1/api-docs/bp

// //app.use("/public", express.static(path.join(__dirname, 'public')));
// app.use("/public", express.static(path.join(process.cwd(), 'public')));
// app.use('/', express.static(path.join(__dirname, '/dist')));
// app.get('/', function (req, res) {
//   return res.sendFile(path.join(__dirname, '/dist/index.html'))
// })
// app.get('/*', function (req, res) {
//   return res.sendFile(path.join(__dirname, '/dist/index.html'))
// })

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'dev' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// if (process.env.ENABLE_CONSOLE_LOGS == "false") {
//   console.log = function () { }
// }
// module.exports = app;
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

