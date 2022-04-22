import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  violonBody: {
    type: String,
    required: true,
  },
  violonStick: {
    type: String,
    required: true,
  },
  violonChincrest: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Recommendation", recommendationSchema);
