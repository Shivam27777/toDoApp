const express = require("express");
const cors = require("cors")
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());
//allow from any frontend and avoid corse error
app.use(cors());

app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "you send wrong inputs"
        })
        return;
    }

    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.json({
        msg : "todo created"
    })

})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function(req,res){
    const createPayload = req.body;
    const parsePayload = updateTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "you send wrong inputs"
        })
        return;
    }

    await todo.updateOne({
        _id : req.body.id
    },{
        completed : true
    })

    res.json({
        msg : "todo marked as completed"
    })
})
app.listen(8000);