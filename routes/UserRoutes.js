const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/getusers", UserController.getUsers);
router.get("/getuser/:userId", UserController.getUser);
router.post("/createuser", UserController.createUser);
router.delete("/deleteuser/:userId", UserController.deleteUser);
router.patch("/updateuser/:userId", UserController.UpdateUser);

module.exports = router;
