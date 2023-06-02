const router = require("express").Router();

const tasksController = require("../controllers/taskscontroller");

router.get("/", tasksController.index);
router.post("/create", tasksController.create);
router.get("/update/:id", tasksController.edit);
router.put("/update/:id", tasksController.update);
router.delete("/delete/:id", tasksController.delete);
module.exports = router;
