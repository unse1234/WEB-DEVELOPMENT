const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: { type: String },
  image: { type: String, required: [true, "Image is required"] },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});


const postModel=mongoose.model("post",postSchema);

module.exports=postModel;