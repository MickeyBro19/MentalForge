const mongoose = require("mongoose");

const taskSchema=new mongoose.Schema({
    task:{
        type:String,
        required:[true,"Please enter a task"]
    }

},{
    timestamps:true,
    versionKey :false
})

module.exports=mongoose.model("task",taskSchema)