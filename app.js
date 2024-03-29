var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var homeRouter = require("./src/Server/routes/home-router");
var reviewsRouter = require("./src/Server/routes/reviews-router");
var categoryRouter = require("./src/Server/routes/category-router");
var tagRouter = require("./src/Server/routes/tag-router");

var app = express();

require("./src/server/models/db");

// view engine setup
app.set("views", path.join(__dirname, "./src/Server/views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "src/public")));

//routers
app.use("/", homeRouter);
app.use("/reviews", reviewsRouter);
app.use("/categories", categoryRouter);
app.use("/tags", tagRouter);
app.use("/addComment", reviewsRouter);

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
