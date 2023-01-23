const express = require("express");
const { registerUser } = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(registerUser); // using this we can chain posts/gets
// router.post("/login", authUser); // here we need to write the logic inside of the post we cannot change inside of it

module.exports = router;
