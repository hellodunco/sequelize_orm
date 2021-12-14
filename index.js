const sequelize = require('./src/config/config');

const Customer = require('./src/models/customer');
const Order = require('./src/models/order');

// Relationship / Association
Customer.hasMany(Order);

let customerId = null;
// Sync all the Models at once

sequelize.sync({ force: true })
  .then((result) => {
    return Customer.create({ name: 'Duncan G', email: 'dg@gmail.com' });
  })
  .then(customer => {
    customerId = customer.id;
    console.log(`First Customer created: ${customer.toJSON()}`);
    return customer.createOrder({ total: 105 });
  })
  .then(order => {
    console.log(`Order added: ${order.toJSON()}`);
    return Order.findAll({ where: customerId });
  })
  .then(orders => {
    console.log(`CustomerId ${customerId} orders are: ${orders}`);
  })
  .catch((err) => console.log(err));