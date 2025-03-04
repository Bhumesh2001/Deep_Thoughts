const express = require("express");
const { validateUser } = require("../middlewares/validationMiddleware");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", validateUser, userController.createUser);
router.put("/:id", validateUser, userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
