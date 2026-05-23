const express = require("express");
const passport = require("passport");
const authController = require("../controllers/Auth");
const authMiddleware = require("../middleware/AuthMiddleware");

const router = express.Router();

// local auth
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/logout").post(authController.logout);

// google auth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  authController.googleCallback,
);

router.get("/me", authMiddleware, (req, res) => {
  res.json({
    message: "protected routes",
    user: req.user,
  });
});

module.exports = router;
