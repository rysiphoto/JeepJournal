const router = require("express").Router();
const maintainController = require("../../controllers/maintainController");

// Matches with "/api/maintain"
router.route("/maintain")
  .get(maintainController.findAll)
  .post(maintainController.create);

// Matches with "/api/maintain/:id"
router
  .route("/maintain/:id")
  .get(maintainController.findById)
  .put(maintainController.update)
  .delete(maintainController.remove);

module.exports = router;
