const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: { type: "String", require: true },
  description: { type: "String", require: true },
  check: { type: Boolean, require: true },
});

const Task = mongoose.model("task", TaskSchema);

module.exports = Task;
