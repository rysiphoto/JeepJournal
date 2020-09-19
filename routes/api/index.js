const router = require("express").Router();
// const tripsRoutes = require("./trips");
// const maintainRoutes = require("./maintain");
const userRoutes = require("./user");

// trips routes
// router.use("/trips", tripsRoutes);
// // maintain routes
// router.use("/maintain", maintainRoutes);
// user route
router.use("/user", userRoutes);

module.exports = router;


