const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

module.exports.development = {
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT+7',
  },
  seederStorage: 'sequelize',
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
};

module.exports.production = {
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT+7',
  },
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
};