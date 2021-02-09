const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const env = require("dotenv");

const connectiontoDatabase = require("./dbconfig")

env.config();
connectiontoDatabase();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
});


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/v1", require('./app/routes/userRoutes'))
app.use("/v1", require('./app/routes/admin/adminRoutes'))
app.use("/v1", require('./app/routes/categoryRoutes'))
app.use("/v1", require('./app/routes/productRoutes'))
app.use("/v1", require('./app/routes/cartRoutes'))

app.use((error, res, req, next) => {
    res.status(error.status || 500).json({
        response: false,
        msg: error.message
    });
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})