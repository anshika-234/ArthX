const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const watchlistSchema = new Schema({
  name: String,
  price: Number,
  percent: Number,
  isDown: Boolean,
});
module.exports = watchlistSchema;
