const Task = require("../model/taskModel")


//create Task (first part of C)
// using post 
const createTask = async (req,res)=> {
    try {
    const task = await Task.create(req.body)  //whenever we req from the body, we create a task to be carried out
        res.status(200).json(task)

} catch (error) {
    res.status(500).json({msg:error.message})
    
}
   
} 

 
//Get all tasks

const getAllTask= async (req,res)=>{
    try {
        const task = await Task.find()
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
 }

const updateTaskById= async (req,res)=>{
    try {
        const {id} = req.params
        const task = await Task.findByIdAndUpdate({_id: id}, req.body,
            {new: true,
              runValidators:true})
        // if id does not exist
        if(!task){
            return res.status(404).json(`No task with id: ${id}`)
        }
        res.status(200).json(task)
    }
        catch (error) {
            res.status(500).json({msg:error.message})
        }
 }


const deleteTaskById=  async (req,res)=>{
    try {
        const {id} = req.params
        const task = await Task.findByIdAndDelete(id)
        // if id does not exist
        if(!task){
            return res.status(404).json(`No task with id: ${id}`)
        }
        res.status(200).json(task)
    }
        catch (error) {
            res.status(500).json({msg:error.message})
        }
 }
 module.exports= {createTask, getAllTask, updateTaskById, deleteTaskById}