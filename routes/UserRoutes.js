const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/users", UserController.createUser);
router.get("/users", UserController.getUsers);
router.get("/users/:userId", UserController.getUser);
router.delete("/users/:userId", UserController.deleteUser);
router.patch("/users/:userId", UserController.UpdateUser);

module.exports = router;
