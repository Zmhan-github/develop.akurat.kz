const express = require('express');
const router = express.Router();

const sendMail = require('../controllers/sendMail');

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://akurat.kz");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.post('/send_mail', sendMail);

module.exports = router;