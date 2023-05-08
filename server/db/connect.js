const mongoose = require("mongoose")

const url = "mongodb+srv://todo:todo1@cluster0.sqq4j8z.mongodb.net/todo-app?retryWrites=true&w=majority"

//connect to mongourl
async function connectDb(){
    console.log("connect to dda")
   await mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    })
    .then(() => {
        console.log("database connected")
    }).catch((err) => {
        console.error(err)

    })
}

exports.module = connectDb()

