import User from './user.js';
import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    teachers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
    ],
    students: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
    ],
    
    
    
})

export default mongoose.model("Course", courseSchema);