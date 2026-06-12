const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const crypto = require("crypto");





async function registerUser (req, res) {
  const isUserExist = await userModel.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }],
  });
  if (isUserExist) {
    return res.status(400).json({
      message:
        "Email already exists" +
        (isUserExist.email == req.body.email
          ? "email already exist"
          : "username already exist"),
    });
  }
  try {
    const { username, email, password, bio, profileImg } = req.body;
    const hashedPassword = crypto
      .createHash("md5")
      .update(password)
      .digest("hex");
    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
      bio,
      profileImg,
    });
    const token = jwt.sign({ id: user._id }, process.env.jwt_secret, {
      expiresIn: "1d",
    });
    res.cookie("JWT_Token", token);
    res
      .status(201)
      .json({
        message: "user registered sucessfully ",
        user: {
          username: user.username,
          email: user.email,
          bio: user.bio,
          profileImg: user.profileImg,
        },
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
}



async function loginUser (req, res) {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = crypto
      .createHash("md5")
      .update(password)
      .digest("hex");
    isUserExist = await userModel.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (!isUserExist) {
      return res.status(400).json({ message: "invalid email or username" });
    }
    const isPasswordMatch = hashedPassword === isUserExist.password;
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "invalid password" });
    }
    const token = jwt.sign({ id: isUserExist._id }, process.env.jwt_secret, {
      expiresIn: "1d",
    });
    res.cookie("JWT_Token", token);
    res
      .status(201)
      .json({
        message: "user registered sucessfully ",
        user: {
          username: isUserExist.username,
          email: isUserExist.email,
          bio: isUserExist.bio,
          profileImg: isUserExist.profileImg,
        },
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
}


module.exports={registerUser,loginUser}; 