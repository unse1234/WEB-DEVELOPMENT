const followModel = require("../models/follow.model");

// follow-user
async function followUser(req, res) {
  const followerId = req.userId;
  const followingId = req.params.userId;
  if (followerId === followingId) {
    return res.status(400).json({ message: "You cannot follow yourself" });
  }
  try {
    const existingFollow = await followModel.findOne({
      followerId,
      followingId,
    });
    if (existingFollow) {
      return res
        .status(400)
        .json({ message: "You are already following this user" });
    }
    const newFollow = new followModel({ followerId, followingId });
    await newFollow.save();
    res.status(201).json({ message: "User followed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
// unfollow-user
async function unfollowUser(req, res) {
  const followerId = req.userId;
  const followingId = req.params.userId;

  try {
    const existingFollow = await followModel.findOne({
      followerId,
      followingId,
    });
    if (!existingFollow) {
      return res
        .status(400)
        .json({ message: "You are not following this user" });
    }
    await followModel.deleteOne({ followerId, followingId });
    res.status(200).json({ message: "User unfollowed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
module.exports = { followUser, unfollowUser };
