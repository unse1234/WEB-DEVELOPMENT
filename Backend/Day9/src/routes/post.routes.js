const  express=require("express");
const postRouter=express.Router();
const {createPost,getUserPosts,getPostDetails}=require("../controllers/post.controller");
const identifyUser = require("../middlewares/auth.middleware");
const multer=require("multer");
const upload=multer({storage:multer.memoryStorage()});

postRouter.post("/create",upload.single("image"),identifyUser,createPost);

postRouter.get("/user-posts",identifyUser,getUserPosts);

postRouter.get("/post-details/:postId",identifyUser,getPostDetails);


module.exports=postRouter;

