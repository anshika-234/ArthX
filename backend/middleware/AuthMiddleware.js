const jwt = require("jsonwebtoken");
const CustomError = require("../util/CustomError");
const User = require("../model/User"); // or ../models/User (be consistent)

module.exports = async (req, res, next) => {
  let token;

  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(new CustomError("Not logged in", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return next(new CustomError("User no longer exists", 401));
    }

    req.user = user;
    next();
  } catch (err) {
    return next(new CustomError("Invalid token", 401));
  }
};
