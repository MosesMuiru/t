const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const connectDb = require("./db/connect")

app.use(cors())
app.use(bodyParser.json())

//connect db
connectDb

// routes
const todoRoutes = require("./routers/todoroutes")
app.use("/api",todoRoutes)

app.listen(4000,() => {
    console.log("server is on 2300")
})