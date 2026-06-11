require('dotenv').config();
const App= require('./src/app');
const connectDB=require('./src/config/databse');

connectDB();

App.listen(3000,()=>{
    console.log('Server is running on port 3000');
});