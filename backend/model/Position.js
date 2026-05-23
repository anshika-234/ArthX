const mongoose = require("mongoose");
const positionSchema = require("./../schemas/Positions");

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;
