const router = require("express").Router();
const passport = require("passport");
// const booksController = require("../../controllers/booksController");
const authController = require("../../controllers/authController");

//Books
  // // Matches with "/api/books"
  // router.route("/")
  //   .get(booksController.findAll)
  //   .post(booksController.create);

  // // Matches with "/api/books/:id"
  // router
  //   .route("/:id")
  //   .get(booksController.findById)
  //   .put(booksController.update)
  //   .delete(booksController.remove);

  // module.exports = router;

router
  .route("/register/:username/:password")
  .get(authController.register);

router
  .route("/yesorno")
  .get(authController.authCheck);

router
  .route("/login")
  .get(passport.authenticate("local"), authController.authLogin);

router
  .route("/logout")
  .get(authController.authLogout);

module.exports = router;



