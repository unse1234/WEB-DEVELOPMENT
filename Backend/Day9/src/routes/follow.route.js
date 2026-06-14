const express = require("express");
const followRouter = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const {
  followUser,
  unfollowUser,
} = require("../controllers/follow.controller");

// follow-user
followRouter.post("/follow/:userId", authMiddleware, followUser);

// unfollow-user
followRouter.delete("/unfollow/:userId", authMiddleware, unfollowUser);

module.exports = followRouter;
