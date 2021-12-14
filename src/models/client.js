const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Client = sequelize.define('client', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
},
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
  });

Client.sync().then(() => console.log('Client model synced'));
module.exports = Client;