const express=require('express');
const authRouter=require('./routes/auth.routes');
const cookieParser=require('cookie-parser');
const App=express();
App.use(cookieParser());
App.use(express.json());
App.use('/api/auth',authRouter);

module.exports=App;