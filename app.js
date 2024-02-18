var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.get("/first", function (request, response) {
  response.send("Hello " + request.params.name);
});

app.get("/second/:name", function (request, response) {
  response.send("Hello " + request.params.name);
});

app.get("/third/:firstname&:lastname", function (request, response) {
  response.send("Hello " + request.params.firstname + request.params.lastname);
});

app.post("/", function (request, response) {
  response.send(request.body);
  console.log(request.body);
});

module.exports = app;
