const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize_orm', 'dunco', 'q1234', {
  dialect: 'postgres',
  host: 'localhost',
});

module.exports = sequelize;