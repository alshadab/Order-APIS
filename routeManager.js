const OrderHandler = require("./Router/Order.js");

module.exports = function () {
  app.use("/api/order", OrderHandler);
};
