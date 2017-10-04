const router = require("express").Router();
const searchController = require("../../controllers/searchController");

router.route("/").get(searchController.randomRecipes);
router.route("/ingredientSearch").post(searchController.getRecipesByIngredients);
router.route("/:id").get(searchController.getRecipeById);
// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);
//
// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
