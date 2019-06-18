var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./src/Server/routes/home-router");
var usersRouter = require("./src/Server/routes/reviews-router");
var addRouter = require("./src/Server/routes/add-router");

var app = express();


//DB connection
//const db connection = string from mongo
//pasted in mongo stuff from slides and updated the connection to what we required on line 14 then changed stuff to match books
//db setup
require("./src/server/models/db")


// view engine setup
app.set("views", path.join(__dirname, "./src/Server/views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "src/public")));

app.use("/", indexRouter);
app.use("/reviews", usersRouter);
app.use("/add", addRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
