const router = require("express").Router();
const OwnerController = require("../controllers/OwnerController");

router.get("/owner", OwnerController.getOwner);
router.post("/owner", OwnerController.registerOwner);

module.exports = router;
