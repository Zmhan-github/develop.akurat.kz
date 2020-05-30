"use strict";
const path = require('path');
const express = require('express');
const nodeMailer = require('nodemailer');
const helmet = require('helmet');

const { Chefs } = require('./sequelize/db/models');


const app = express();

app.use(helmet());

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://akurat.kz");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/send-message', (req, res) => {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'robot@akurat.kz',
      pass: 'Asd123445'
    }
  });

  let mailOptions = {
    from: '"Robot" <robot@akurat.kz>', // sender address
    to: 'web@akurat.kz', // list of receivers
    subject: 'Новая заявка от ' + req.body.name, // Subject line
    html: `
      <p>От кого: <b>${req.body.name}</b></p>
      <p>Контактые данные: ${req.body.contact}</p>
      <p>Сообщение: ${req.body.message}</p>
    ` // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json({ data: 'error' });
      return console.log(error);
    }

    res.json({ data: 'success' });

  });
});

app.get('/test', (req, res) => {
  Chefs.findAll().then(chefs => {
    res.json(chefs)
  })
});


app.listen(process.env.PORT || 3000, function () {
  console.log(`/====SERVER RUNNING =====/ develop.akurat.kz:${process.env.PORT || 3000}`);
});