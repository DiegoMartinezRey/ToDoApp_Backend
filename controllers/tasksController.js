const Task = require("../models/Tasks");

const getTasks = async (req, res) => {
  const TaskList = await Task.find();
  console.log(TaskList);
  res.json(TaskList);
};

const addTask = async (req, res) => {
  const newTask = Task({
    name: req.body.name,
    description: req.body.description,
    check: false,
  });

  await newTask.save();
  res.json(newTask);
};

const deleteTask = async (req, res) => {
  const idOfTaskToDelete = req.params.name;
  await Task.deleteOne({
    name: idOfTaskToDelete,
  });
  res.json();
};

const updateTask = async (req, res) => {
  const idOfTaskToUpdate = req.params.name;
  await Task.findOneAndUpdate(
    {
      name: idOfTaskToUpdate,
    },
    {
      check: true,
    }
  );
  res.json();
};

const updateTaskInfo = async (req, res) => {
  const idOfTaskToUpdate = req.params.name;
  console.log("BACKENDPrueba de lo que llega: ", idOfTaskToUpdate);
  await Task.findOneAndUpdate(
    {
      name: idOfTaskToUpdate,
    },
    {
      name: req.body.name,
      description: req.body.description,
    }
  );
  res.json();
};

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
  updateTaskInfo,
};
