const router = require("express").Router();
const tripsRoutes = require("./trips");
const maintainRoutes = require("./maintain");

// trips routes
router.use("/trips", tripsRoutes);
// maintain routes
router.use("/maintain", maintainRoutes);

module.exports = router;


