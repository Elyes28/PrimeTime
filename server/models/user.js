import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: { type: String, required:  true },
  lastname: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  role: {type:String,required:true,default:"user"},
  active_until:{type:Date},

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

export default mongoose.model("User", userSchema);