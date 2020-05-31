"use strict";
const express = require('express');
const app = express();

const path = require('path');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const indexRouter = require('./routers/index');

const loginRouter = require('./routers/login');
const processLogin = require('./routers/processLogin');
const logoutRouter = require('./routers/logout');

const sendMailRouter = require('./routers/sendMail');

const welcomeRouter = require('./routers/welcome');
const testRouter = require('./routers/test');

app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/', processLogin);
app.use('/', logoutRouter);
app.use('/', sendMailRouter);
app.use('/', welcomeRouter);
app.use('/', testRouter);


app.listen(port, () => {
  console.log(`/====SERVER RUNNING, PORT=${port}====/`);
});