const Task = require ('../models/Task.js');
const {createCustomError} = require ('../errors/custom-error.js');
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find ({});
    res
      .status (200)
      .json ({success: true, data: {tasks, numOfHits: tasks.length}});
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
      //  return res.status (404).json ({message: `No such task ${taskId}`});
      //another refactor way
      //
      // const error = new Error ('Not Found');
      // error.status = 404;
      // return next (error);
      //another refactor way
      return next(createCustomError(`No Task with Id ${taskId}`,404));
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
