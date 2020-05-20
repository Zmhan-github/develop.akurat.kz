"use strict";

const express = require('express');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
      return console.log(error);
    }

    res.send({ data: 'success' });

  });
});

app.get('/test', (req, res) => {
  res.send('Test');
});


app.listen(process.env.PORT, function () {
  console.log('/====SERVER RUNNING =====/ develop.akurat.kz:80');
});