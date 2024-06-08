
const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
   
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });


 // TodoModel.js
module.exports = mongoose.models.Todo || mongoose.model('Todo', todoSchema);
