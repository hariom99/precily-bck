const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
app.use(cors());
app.use(bodyParser.json())

// tasks container
let tasks = [];

// api count variables

let addTask = 0;
let updateTask = 0;
let deleteTask = 0;

// API for getting task 
app.post("/api/v1/get-tasks/", (req, res) => {
    res.send({ tasks, updateTask, addTask, deleteTask });
})

// API for adding task 
app.post("/api/v1/add-task/", (req, res) => {
    const task = req.body.task;
    // console.log(task);
    addTask++;
    tasks.push(task);
    res.send({ tasks, addTask });
})


// API for deleting task 
app.post("/api/v1/delete-task/", (req, res) => {
    const taskId = req.body.taskId;
    // console.log(task);
    deleteTask++;
    tasks.splice(taskId, 1);
    res.send({ tasks, deleteTask });
})

// API for updating task

app.post("/api/v1/update-task/", (req, res) => {
    const task = req.body.task;
    const id = req.body.id;
    tasks[id] = task;
    updateTask++;
    res.send({ tasks, updateTask });
})



// API for resetting  everything

app.post("/api/v1/reset/", (req, res) => {
    addTask = 0;
    updateTask = 0;
    deleteTask = 0;
    tasks = [];
    res.send({ tasks, updateTask, addTask, deleteTask });
})




const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("server started at " + PORT);
})