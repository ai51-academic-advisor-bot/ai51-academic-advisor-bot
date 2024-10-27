const mongoose = require('mongoose');

const Transcript = {
//
}
const ChatHistory = {
//
}


// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }
//   transcriptInfo: {
//     type: Transcript,
//     required: false,
//   },
//   chatHistory: {
//     type: ChatHistory,
//     required: true,
//   },
});

// Create the model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
