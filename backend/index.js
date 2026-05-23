require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");

const errorHandler = require("./controllers/ErrorHandler");
const authRoute = require("./routes/Auth");
const dashboardRoute = require("./routes/Dahboard");

require("./config/passport");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(passport.initialize());

// log requests
app.use((req, res, next) => {
  console.log("➡️ Incoming:", req.method, req.originalUrl);
  next();
});

app.use("/auth", authRoute);
app.use("/dashboard", dashboardRoute);

app.use((req, res, next) => {
  console.log("➡️ Incoming:", req.method, req.originalUrl);
  next();
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

// error handler (LAST)
app.use(errorHandler.errorHandler);

mongoose
  .connect(url)
  .then(() => {
    console.log("Mongodb is connected");
    console.log("DB Name:", mongoose.connection.db.databaseName);
    app.listen(port, () => {
      console.log(`app is listening at ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
