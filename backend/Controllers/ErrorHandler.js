const CustomError = require("../util/CustomError");

const sendDevError = (err, res) => {
  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

const sendProdError = (err, res) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  console.error("🔥 ERROR:", err);

  res.status(500).json({
    status: "error",
    message: "Something went wrong",
  });
};

module.exports.errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  let error = { ...err };
  error.message = err.message;

  if (err.name === "CastError") {
    error = new CustomError("Invalid ID format", 400);
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    error = new CustomError(`${field} already exists`, 400);
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((el) => el.message);
    error = new CustomError(messages.join(", "), 400);
  }

  if (process.env.NODE_ENV === "development") {
    return sendDevError(error, res);
  }

  if (process.env.NODE_ENV === "production") {
    return sendProdError(error, res);
  }

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
};
