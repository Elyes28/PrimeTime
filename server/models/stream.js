import mongoose from "mongoose";

const streamSchema = mongoose.Schema({
  meetingId: { type: String, required:  true },
  streamerName: { type: String, required:  true },
  viewerCount: { type: Number, required: true },
  streamTitle: { type: String, required: true }
});

export default mongoose.model("stream", streamSchema);