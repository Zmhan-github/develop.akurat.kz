const express = require('express');
const router = express.Router();

const { Chefs } = require('../sequelize/db/models');

router.get('/test', (req, res) => {
  Chefs.findAll().then(chefs => {
    res.json(chefs)
  }).catch((err) => {
    res.json({ connectionError: true });
  })
});

module.exports = router;

