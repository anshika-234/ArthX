const express = require("express");
const router = express.Router();
const dashboardController = require("./../Controllers/Dashboard");

router
  .route("/holdings")
  .post(dashboardController.holdings)
  .get(dashboardController.getHoldings);

router
  .route("/orders")
  .post(dashboardController.orders)
  .get(dashboardController.getOrders);

module.exports = router;
