const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {

  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false

});

module.exports = Order;