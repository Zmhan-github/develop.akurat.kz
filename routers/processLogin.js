const express = require('express');
const router = express.Router();

const processLogin = require('../controllers/processLogin');

router.post('/process_login', processLogin);

module.exports = router;