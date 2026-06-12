const  express=require("express");
const postRouter=express.Router();
const {createPost}=require("../controllers/post.controller");
const multer=require("multer");
const upload=multer({storage:multer.memoryStorage()});

postRouter.post("/create",upload.single("image"),createPost);



module.exports=postRouter;

