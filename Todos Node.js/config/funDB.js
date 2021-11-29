function connectDB (){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/Todos'); 
    mongoose.connection.once('connected', () => console.log('DB Connection Successfully...................'))

}

module.exports = {connectDB}