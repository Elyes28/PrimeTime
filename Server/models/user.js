const mongoose = require('mongoose')
const Course= require ("./course")

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  courses_teaching: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }
  ],
  courses_learning: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }
  ]
});

module.exports = mongoose.model('User',userSchema)