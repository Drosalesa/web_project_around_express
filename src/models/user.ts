import mongoose from "mongoose";

const avatarRegex = /^https?:\/\/(www\.)?[\w-]+(\.\w+)+(\/[\w-\.~:\/\?%#\[\]@!$&'\(\)\*\+,;=]*)*$/i;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => avatarRegex.test(value),
      message: "Dirección de avatar no valida",
    }
  }
})

const User = mongoose.model("User", userSchema);

export default User