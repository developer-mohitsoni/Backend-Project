var createError = require("http-errors");
var express = require("express");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const db = require("./db");

const session = require("express-session");

// var authRouter = require('./routes/authRouter');
var authRouter = require("./routes/authRouter");
var userRouter = require("./routes/userRouter");
var bankRouter = require("./routes/bankRouter");
var campRouter = require("./routes/campRouter");

var app = express();

require("dotenv").config();

const bodyParser = require("body-parser");

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: ["http://localhost:" + process.env.PORT],
    credentials: true,
  })
);

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/bank", bankRouter);
app.use("/camp", campRouter);

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

module.exports = app;
