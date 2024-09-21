import mongoose from "mongoose";

const LazadaUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    sentTo: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.models.LazadaUser ||
  mongoose.model("LazadaUser", LazadaUserSchema);
