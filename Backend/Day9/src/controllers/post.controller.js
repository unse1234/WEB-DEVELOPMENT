const jwt = require("jsonwebtoken");
const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");



const client = new ImageKit({
  privateKey: process.env.imagekit_private_key,
});

//  create post controller

async function createPost(req, res) {
  let file;
 try {
     file = await client.files.upload({
      file: new File([req.file.buffer], "file"),
      fileName: "test",
      folder: "instagram-clone-images",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error uploading file" });
  }

  
  try {
    const post = await postModel.create({
      caption: req.body.caption,
      image: file.url,
      userId: req.userId,
    });
    res.status(201).json({ message: "post created successfully", post });
  } catch (error) {
    return res.status(500).json({ message: "Error creating post" });
  }
}


// get all post of user controller

async function getUserPosts(req,res){
    
try {
   const posts=await postModel.find({userId:req.userId})
   res.status(200).json({ posts });
}
catch(error){
    return res.status(500).json({ message: "Error fetching posts" });
}
}


// 

async function getPostDetails(req, res) {
 

  try {
    const post = await postModel.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    if (post.userId.toString() !== req.userId) {
      return res.status(403).json({
        message: "You are not allowed to view this post",
      });
    }

    return res.status(200).json({
      message: "Post fetched successfully",
      post,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching post",
    });
  }
}


module.exports = { createPost, getUserPosts ,getPostDetails};
