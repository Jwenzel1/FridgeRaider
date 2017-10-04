const router = require("express").Router();
const searchRoutes = require("./search");
const authRoutes = require("./auth");

router.use("/search", searchRoutes);
router.use("/auth", authRoutes)

module.exports = router;
