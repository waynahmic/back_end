const express = require("express")
const Task = require("../model/taskModel")
const {createTask, getAllTask, updateTaskById, deleteTaskById} = require("../controllers/taskController")
const router = express.Router() 

//create Task (first part of C)
router.get('/api/tasks', getAllTask)
// get task; to retrieve the task that was created -----to get all tasks
 router.post('/api/tasks', createTask)

 router.get('/api/tasks/:id', async (req,res)=>{
    try {
        const {id} = req.params
        const task = await Task.findById(id)
        // if id does not exist
        if(!task){
            return res.status(404).json(`No task with id: ${id}`)
        }
        res.status(200).json(task)
    }
        catch (error) {
            res.status(500).json({msg:error.message})
        }
 });


 router.get('/api/tasks/:id', (req,res) => {
    res.send('id created')
})

 
//Update task
router.put('/api/tasks/:id',updateTaskById)

 // Delete Task 
 router.delete('/api/tasks/:id', deleteTaskById);
















 module.exports = router