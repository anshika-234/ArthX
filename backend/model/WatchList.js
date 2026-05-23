const mongoose = require("mongoose");
const watchListSchema = require("./../schemas/WatchList");

const WatchList = mongoose.model("WatchList", watchListSchema);

module.exports = WatchList;
