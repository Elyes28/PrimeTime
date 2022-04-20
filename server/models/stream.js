import mongoose from "mongoose";

const streamSchema = mongoose.Schema({
  meetingId: { type: String, required:  true },
  streamerName: { type: String, required:  true },
  viewerCount: { type: Number, required: true },
  streamTitle: { type: String, required: true },
  streamImg: { type: String, required: true },
  isrecorded:{type:Boolean,default: false}


});

export default mongoose.model("stream", streamSchema);