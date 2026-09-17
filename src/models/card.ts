import mongoose from "mongoose";

const linkRegex = /^https?:\/\/(www\.)?[\w-]+(\.\w+)+(\/[\w-\.~:\/\?%#\[\]@!$&'\(\)\*\+,;=]*)*$/i;

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    validate: {
      validator: (value: string) => linkRegex.test(value),
      message: "Direccion de imagen no valida"
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: [],
  }],
  createdAt: {type: Date, default: Date.now},
});

const Card = mongoose.model("Card", cardSchema);

export default Card