const express = require('express');
const router = express.Router();

router.get('/logout', (req, res, next) => {
  res.clearCookie('username');
  res.redirect('login');
});

module.exports = router;