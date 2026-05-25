const Holdings = require("./../model/Holding");
const Orders = require("./../model/Order");

module.exports.holdings = async (req, res) => {
  try {
    const { name, qty, avg, price, net, day, isLoss } = req.body;

    const holding = new Holdings({
      name,
      qty,
      avg,
      price,
      net,
      day,
      isLoss,
    });

    const savedHolding = await holding.save();

    res.status(201).json(savedHolding);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getHoldings = async (req, res) => {
  try {
    const holdings = await Holdings.find({});

    res.status(200).json(holdings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.orders = async (req, res) => {
  try {
    const { name, qty, price, type, status } = req.body;
    const newOrders = new Orders({ name, qty, price, type, status });
    const orders = await newOrders.save();
    res.status(201).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.getOrders = async (req, res) => {
  try {
    const orders = await Orders.find({});
    res.status(201).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
