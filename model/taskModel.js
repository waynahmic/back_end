const { default: mongoose } = require("mongoose");       //while creating a model the first thing is to install mongoose

const taskSchema= mongoose.Schema({
    name:{
        type:String,                       // (String)want to save something called name
        required:[true, 'please add a task']        //when one writes a letter it goes on to make it true  
    },
},                
{
    timestamps: true    //gives account of what was created in the database
}

)  // we need to pass the schema to a variable so it can be saved as a model in the data base .....in the database it will create a task folder
const Task = mongoose.model('Task', taskSchema)





module.exports = Task;