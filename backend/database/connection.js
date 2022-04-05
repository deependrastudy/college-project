const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/education");
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)

    
})

database.once('connected', () => {
    console.log('Database Connected');
})