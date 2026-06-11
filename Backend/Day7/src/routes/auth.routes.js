const express = require("express");
const userModel = require("../models/users.model");
const jwt = require("jsonwebtoken");
const crypto=require('crypto');

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const isUserExist = await userModel.findOne({ email: req.body.email });

  if (isUserExist) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  try {
    const { name, email, password } = req.body;
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET)
    res.cookie("JWT_Token", token);

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user: newUser,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error registering user",
      error: error.message,
    });
  }
});


authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body; 
  const isUser = await userModel.findOne({ email });
  if (!isUser) {
    return res.status(400).json({
      success: false,
      message: "User not found",
    });
  }
  const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
  const isPasswordMatch = hashedPassword === isUser.password;
  if (!isPasswordMatch) {
    return res.status(400).json({
      success: false,
      message: "Invalid credentials",
    });
  }
  const token = jwt.sign({userId:isUser._id},process.env.JWT_SECRET);
  res.cookie("JWT_Token", token);
  res.status(200).json({
    success: true,
    message: "Login successful",
    user: isUser,
    token,
  });
});

module.exports = authRouter;
