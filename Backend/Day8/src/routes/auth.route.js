const express = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();

// Register Route
authRouter.post("/register", authController.registerUser);

//login route
authRouter.post("/login", authController.loginUser);

module.exports = authRouter;
