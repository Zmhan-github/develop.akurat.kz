
const { Sequelize } = require('sequelize');

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const connection = new Sequelize(process.env.DB_URL, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true
  },
  logging: false,
});

/*
connection.authenticate()
  .then(() => {
    console.log("Connecting SERVER DATABASE!")
  })
  .catch((err) => {
    console.log("Error ", err)
  })
*/


module.exports = connection;