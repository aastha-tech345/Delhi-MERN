var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./config/db.js");

var app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const userRoute = require("./routes/user.route.js");
const roleRoute = require("./routes/role.route.js");
const teamRoute = require("./routes/team.route.js");
const customerRoute = require("./routes/customer.route.js"); // Fix the typo here
const customerInfo = require("./routes/customerInfo.route.js");
const contact = require("./routes/contact.route.js");
const activity = require("./routes/activity.route.js");
const document = require("./routes/document.route.js");
const invoice = require("./routes/invoice.route.js");
const print = require("./routes/print.route.js");
const spv = require("./routes/spv.route.js");
const attorney = require("./routes/attorney.route.js");
const emailRoute = require("./routes/email.route.js");
var createError = require("http-errors");
app.use(logger("dev"));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// let STATIC = path.resolve(__dirname, "build");
// let INDEX = path.resolve(STATIC, "index.html");

// app.use(express.static(STATIC));

app.use("/user", userRoute);
app.use("/role", roleRoute);
app.use("/team", teamRoute);
app.use("/customer", customerRoute);
app.use("/customerInfo", customerInfo);
app.use("/contact", contact);
app.use("/activity", activity);
app.use("/document", document);
app.use("/invoice", invoice);
app.use("/print", print);
app.use("/spv", spv);
app.use("/attorney", attorney);
app.use("/email", emailRoute);

app.use("/", express.static(path.join(__dirname, "./public/document")));
app.use("/", express.static(path.join(__dirname, "./public/user")));

app.use('/', express.static(path.join(__dirname, '/build')));
app.get('/', function (req, res) {
  return res.sendFile(path.join(__dirname, '/build/index.html'))
})
app.get('/*', function (req, res) {
  return res.sendFile(path.join(__dirname, '/build/index.html'))
})

// app.get("/*", function (req, res, next) {
//   res.sendFile(INDEX);
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
