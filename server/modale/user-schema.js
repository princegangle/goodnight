import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  Firstname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20,
  },

  lasttname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20,
  },

  Emailornumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    min: 5,
    max: 20,
  },

  Password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("user", userSchema);

export default User;
