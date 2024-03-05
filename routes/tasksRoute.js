const express = require("express");
const {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
  updateTaskInfo,
} = require("../controllers/tasksController");
const router = express();

router.get("/tasks", getTasks);
router.post("/addTask", addTask);
router.delete("/deleteTask/:name", deleteTask);
router.patch("/updateTask/:name", updateTask);
router.patch("/updateTask/info/:name", updateTaskInfo);

module.exports = router;
