const express = require('express');
const Errorhandler = require('./middleware/errorhandler');
const connectDb = require('./config/dbConnection');
const app = express();
connectDb();
const dotenv = require('dotenv').config();
const port =  process.env.PORT ||  5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contacts")); //middleware in express projects
app.use(Errorhandler);
app.listen(port , () => {
    console.log('The server is running on ' + port)
});
