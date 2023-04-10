const Task = require ('../models/Task.js');
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find ({});
    res.status (200).json ({tasks});
  } catch (error) {
    res.status (500).json ({message: error});
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create (req.body);
    res.status (201).json ({task});
  } catch (error) {
    res.status (500).json ({message: error});
  }
};
const getTask = async (req, res) => {
  try {
    const {id: taskId} = req.params;
    const task = await Task.findOne ({_id: taskId});
    if (!task) {
      res.status (404).json ({message: `No such task ${taskId}`});
    }
    res.status (200).json ({task});
  } catch (error) {
    res.status (500).json ({message: error});
  }
};

const deleteTask = async (req, res) => {
  try {
    const {id: taskId} = req.params;
    const task = await Task.findByIdAndDelete ({_id: taskId});
    if (!task) {
      res.status (404).json ({message: `No such task ${taskId}`});
    }
    res.status (201).json ({task});
    // res.status (201).json ({task:null ,status:'success'});
  } catch (error) {
    res.status (500).json ({message: error});
  }
};
const updateTask = async (req, res) => {
  try {
    const {id: taskId} = req.params;
    const task = await Task.findOneAndUpdate ({_id: taskId}, req.body, {
      new: true,
      runValidators: true,
    });
    // res.status (200).json ({id: taskId, data: req.body});
    if (!task) {
      res.status (404).json ({message: `No such task ${taskId}`});
    }
    res.status (200).json ({task});
  } catch (error) {
    res.status (500).json ({message: error});
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
