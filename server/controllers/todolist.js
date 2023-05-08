const mongoose = require("mongoose")
const toschema = mongoose.Schema({
    duedate:String,
    todo:String,
    taskDetails:String
})

const Todolist = mongoose.model("Todo",toschema)

module.exports = Todolist;