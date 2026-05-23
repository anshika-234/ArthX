const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true,
    },
    status: {
      type: String,
      enum: ["OPEN", "COMPLETED", "CANCELLED"],
      default: "Completed",
    },
  },
  { timestamps: true }
);
module.exports = orderSchema;
