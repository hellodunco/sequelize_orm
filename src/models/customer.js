const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Customer = sequelize.define('customer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
  }
);

Customer.sync({ false: true }).then(() => console.log('Customer model synced'));
module.exports = Customer;