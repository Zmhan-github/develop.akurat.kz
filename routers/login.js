const express = require('express');
const router = express.Router();


const login = require('../controllers/login');

router.use((req, res, next) => {
  if (req.query.msg === 'fail') {
    res.locals.msg = 'Неверный логин или пароль';
  } else {
    res.locals.msg = '';
  }
  next();
});


router.get('/login', login);

module.exports = router;