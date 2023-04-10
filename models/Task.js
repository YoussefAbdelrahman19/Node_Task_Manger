const mongoose = require ('mongoose');
const TaskScehma = new mongoose.Schema ({
  name: {type: 'string', required: [true, 'Must Provide a Name '], trim: true,
  maxlength:[20,'name cannot exceed 20 characters']

},
  completed: {type: 'boolean',default:false },
});

module.exports = mongoose.model ('Task', TaskScehma);
