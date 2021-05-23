import mongoose from "mongoose";
import bcrypt from "bcrypt";

const contactSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    uid: {
      type: String,
    },
    contacts: [],
  },
  { timestamps: true }
);

export default Contact = mongoose.model("Contact", contactSchema);
