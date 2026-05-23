const mongoose = require("mongoose");
const orderSchema = require("./../schemas/Order");

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
