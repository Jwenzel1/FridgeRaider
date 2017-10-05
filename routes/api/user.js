const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/getFavs").get(userController.getUsersFavRecipes);
router.route("/addFav").post(userController.addFavRecipe);
router.route("/delFav").post(userController.addFavRecipe);

module.exports = router;
