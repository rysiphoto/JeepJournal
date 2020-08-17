const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

// Matches with "/api/trips"
router.route("/trips")
  .get(tripsController.findAll)
  .post(tripsController.create);

// Matches with "/api/trips/:id"
router
  .route("/trips/:id")
  .get(tripsController.findById)
  .put(tripsController.update)
  .delete(tripsController.remove);

module.exports = router;
