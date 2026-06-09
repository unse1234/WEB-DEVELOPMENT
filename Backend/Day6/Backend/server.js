
require('dotenv').config();
const connectDB = require('./src/config/database');
const App = require('./src/app');

connectDB();

App.listen(3000, () => {
    console.log('Server is running on port 3000');
});

