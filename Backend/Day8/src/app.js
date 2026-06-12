const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
const authRoute=require("./routes/auth.route");

app.use("/api/auth",authRoute);

module.exports=app;
