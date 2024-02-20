import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username is already taken"],
    minLength: [3, "Username must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Password must be at least 6 characters long"],
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
