const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'robot@akurat.kz',
    pass: 'Asd123445'
  }
});

const mailOptions = ({ username, contact, message }) => ({
  from: '"Robot" <robot@akurat.kz>', // sender address
  to: 'web@akurat.kz', // list of receivers
  subject: 'Новая заявка от ' + username, // Subject line
  html: `
    <p>От кого: <b>${username}</b></p>
    <p>Контактые данные: ${contact}</p>
    <p>Сообщение: ${message}</p>
  ` // html body
});


module.exports = (req, res, next) => {
  const { username, contact, message } = req.body;

  if (username && contact && message) {
    transporter.sendMail(mailOptions(req.body), (error, info) => {
      if (error) {
        res.json({ data: 'error' });
      }
  
      res.json({ data: 'success' });
  
    });
  } else {
    res.json({ data: 'epmty' });
  }
}