const { Model, DataTypes } = require('sequelize');
const connection = require('./connection');

class Chefs extends Model {}

Chefs.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: connection,
  modelName: 'chefs'
});



// class Restaurant extends Model {}

// Restaurant.init({
//   // attributes
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: DataTypes.INTEGER.UNSIGNED
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   sequelize: connection,
//   modelName: 'restaurants'
// });


// Chefs.hasMany(Restaurant, {
//   sourceKey: 'id',
//   foreignKey: 'chefId',
//   as: 'restaurants' // this determines the name in `associations`!
// });

module.exports = {
  Chefs
};