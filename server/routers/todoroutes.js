const express = require("express")
const router = express.Router()
//models


const mongoose = require("mongoose")
const toschema = mongoose.Schema({
    duedate:String,
    todo:String,
    taskDetails:String
})

const Todolist = mongoose.model("Todo",toschema)



//post
router.post("/todos", async(req,res) => {
    

    const {duedate,todo,taskDetails} = req.body;
    const mytodo = new Todolist({
        duedate:duedate,
        todo:todo,
        taskDetails:taskDetails

    })


    try{
        console.log(mytodo)
         await mytodo.save()

    }
    catch(err) {
        console.log(err ,"the errr from savin")
    }
})
//gettig all the todos

router.get("/api/alltodos", async(req,res) => {
    try {
        const todos = await Todolist.find()
        res.send(todos).status(200)
        res.json()
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }
})
//paginated data
router.get("/api/todos",async (req,res) =>{
    const page = parseInt(req.query.limit) || 5;
    const limit = parseInt(req.query.page) || 1;

    

    try{
        const totalCount = await Todolist.countDocuments();
        const totalPages = Math.ceil(totalCount / limit)
        const skip = (page - 1) * limit;

        const todos = await Todolist.find()
        .skip(skip)
        .limit(limit)

        res.json({
            todos,
            page,
            totalPages,
            totalCount,
          });

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Failed to fetch todos' });
          }
    

})



module.exports = router