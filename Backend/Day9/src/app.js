const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
const authRoute = require("./routes/auth.route");
const postRoute = require("./routes/post.routes");
const followRoute = require("./routes/follow.route");



app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/user", followRoute);

module.exports = app;
