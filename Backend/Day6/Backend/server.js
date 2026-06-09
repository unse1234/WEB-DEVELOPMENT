
require('dotenv').config();
const connectDB = require('./src/config/database');
const App = require('./src/app');

connectDB();

App.listen(process.env.PORT || 3000)
