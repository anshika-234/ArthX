const User = require("./../model/User");
const secretToken = require("./../util/SecretToken");
const bcrypt = require("bcrypt");
const CustomError = require("../util/CustomError");
module.exports.signup = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return next(new CustomError("Please enter all fields", 400));
    }

    const newUser = new User({ name, email, password, confirmPassword });
    const user = await newUser.save();

    const token = await secretToken(user._id);
    console.log("RAW PASSWORD 👉", password);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    });
    console.log(user);

    res.status(201).json({
      success: true,
      message: "Signup successful",
      user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new CustomError("Email or password doesn't exist."));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new CustomError("Invalid email or password", 400));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new CustomError("Invalid email or password", 400));
    }
    let token = await secretToken(user._id);
    console.log("LOGIN PASSWORD 👉", password);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    });
    res.status(200).json({
      message: "Login Successfull",
      user,
      token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.logout = (req, res) => {
  res.cookie("token", "", {
    sameSite: "lax",
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logout successfull" });
};

module.exports.googleCallback = async (req, res) => {
  const token = await secretToken(req.user._id);

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24,
  });

  res.redirect("http://localhost:3000/");
};
