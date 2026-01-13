const Task = require("../models/Task");

const createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;

  if (!title || !description || !dueDate) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const task = await Task.create({
    title,
    description,
    dueDate,
    user: req.user.id,
  });

  res.status(201).json(task);
};

const getTasks = async (req, res) => {
  const filter = { user: req.user.id };

  if (req.query.status) {
    filter.status = req.query.status;
  }

  const tasks = await Task.find(filter).sort({ createdAt: -1 });
  res.status(200).json(tasks);
};

const getTaskById = async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    user: req.user.id,
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task);
};

const updateTask = async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    user: req.user.id,
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const { title, description, status, dueDate } = req.body;

  if (title) task.title = title;
  if (description) task.description = description;
  if (status) task.status = status;
  if (dueDate) task.dueDate = dueDate;

  await task.save();

  res.status(200).json(task);
};

const deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({ message: "Task deleted successfully" });
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
