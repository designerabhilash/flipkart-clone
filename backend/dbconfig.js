const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

module.exports = function() {
    mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.w2clx.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(_ => console.log('Database connected !!!')).catch(err => console.log(`Error while eastablishing connection to db ${err}`));
}

// mongodb+srv://root:admin@cluster0.w2clx.mongodb.net/flipkart?retryWrites=true&w=majority