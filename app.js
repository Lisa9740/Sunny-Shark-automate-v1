// permet d'utiliser la variable d'environnement en conservant ses données de connexion  à la bbd "gestion-automate" caché
 require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var url=process.env.MONGODB_URI;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bassinRouter = require('./routes/bassin');
var siteRouter = require('./routes/site');
var automateRouter = require('./routes/automate');

var app = express();

// parse application/x-www-form-urlencoded

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect(url, {useNewUrlParser:true})
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/automate', automateRouter);
app.use('/users', usersRouter);
app.use('/bassin', bassinRouter);
app.use('/site', siteRouter);

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

module.exports = app;
