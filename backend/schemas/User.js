const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Invalid email format"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "User Name is required"],
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    required: function () {
      return this.provider === "local";
    },
    minlength: [6, "Min 6 characters"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: function () {
      return this.provider === "local";
    },
    validate: {
      validator: function (v) {
        return v === this.password;
      },
      message: "Password don't match",
    },
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true, // 👈 VERY IMPORTANT
  },

  provider: {
    type: String,
    enum: ["local", "google", "facebook"],
    default: "local",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = "";
});

userSchema.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
module.exports = userSchema;
