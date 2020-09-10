const mongoose = require('mongoose');

//const MONGODB_URI = 'mongodb+srv://dbAdmin:bryanmm16@cluster0-h6lrb.mongodb.net/mern-app';

mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database Connected!');
});