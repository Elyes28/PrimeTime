const mongoose = require('mongoose')
const User= require ("./user")

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

module.exports = mongoose.model('Course',courseSchema)