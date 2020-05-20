const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.json({ database_user: process.env.DATABASE_USER });
});

app.listen(process.env.PORT, function () {
  console.log('/====SERVER RUNNING =====/ develop.akurat.kz:80');
});