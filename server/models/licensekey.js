import mongoose from "mongoose";

const licenseKeySchema = mongoose.Schema({
  license_key: { type: String, required:  true, default:"" },
  duration: { type: Number, required:  true },
  isActivated: { type: Boolean, required: true , default:false },
});

export default mongoose.model("LicenseKey", licenseKeySchema);