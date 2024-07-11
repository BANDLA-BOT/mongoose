const mongoose = require('mongoose');

const sub_todo = new mongoose.Schema(
    {
        content:{
            type:String,
            required:true,
        },
        complete:{
            type:Boolean,
            default:false
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    },
    {timestamps:true}
)

export const Sub = mongoose.model('sub_todo', sub_todo)