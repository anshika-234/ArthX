const mongoose = require("mongoose");
const holdingSchema = require("../schemas/Holding");

const Holding = mongoose.model("Holding", holdingSchema);

module.exports = Holding;
