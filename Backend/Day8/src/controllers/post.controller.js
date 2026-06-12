const jwt=require("jsonwebtoken");
const postModel=require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.imagekit_private_key,
});

async function createPost(req,res){
 const file=  await client.files.upload({ file: new File([req.file.buffer], 'file'), fileName: 'test' });
  res.send(file);
}



module.exports={createPost};