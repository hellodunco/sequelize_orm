const sequelize = require('./src/config/config');

const Customer = require('./src/models/customer');
const Order = require('./src/models/order');
const Client = require('./src/models/client');

// Relationship / Association
Customer.hasMany(Order);

// Creating a Customer model instance
const dun = Customer.create({
  name: 'Duncan G',
  email: 'dg@gmail.com'
}).then(dun => console.log(dun.toJSON()));


// let customerId = null;
// // Create customer table in db && add data
// Customer.sync({ force: true }).then(() => {
//   return Customer.create({ name: 'Duncan M', email: 'dm@gmail.com' });
// });

// // Create order table in db && add data
// Order.sync({ force: true }).then((customer) => {
//   customerId = customer.id;
//   return customer.createOrder({ total: 105 });
// });


// sequelize.sync({ force: true })
//   .then((result) => {
//     return Customer.create({ name: 'Duncan G', email: 'dg@gmail.com' });
//   })
//   .then(customer => {
//     customerId = customer.id;
//     console.log(`First Customer created: ${customer}`);
//     return customer.createOrder({ total: 105 });
//   })
//   .then(order => {
//     console.log(`Order added: ${order}`);
//     return Order.findAll({ where: customerId });
//   })
//   .then(orders => {
//     console.log(`CustomerId ${customerId} orders are: ${orders}`);
//   })
//   .catch((err) => console.log(err));