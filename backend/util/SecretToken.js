require("dotenv").config();
const jwt = require("jsonwebtoken");

const secretToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "7d",
  });
};
module.exports = secretToken;
