const router = require("express").Router();
const passport = require("passport");
const authController = require("../../controllers/authController");

router
  .route("/register/:username/:password")
  .get(authController.register);

router
  .route("/yesorno")
  .get(authController.authCheck);

router
  .route("/login/:username/:password")
  .get(authController.authLogin);

router
  .route("/logout")
  .get(authController.authLogout);

module.exports = router;
