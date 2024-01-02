// models/Quiz.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const InstaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  thoughts: {
    type: String,
  },

  video: {
    type: String,
  },
  photo: {
    type: String,
  },
  audio: {
    type: String,
  }
});

export const Insta = mongoose.model("Insta", InstaSchema);
