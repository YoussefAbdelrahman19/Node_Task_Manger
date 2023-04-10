const express = require ('express');
const app = express ();
const port = 3000;
const connectDB = require ('./db/connect');
require('dotenv').config();

const tasksRoute = require ('./routes/tasks.js');
const postsRoute = require ('./routes/posts.js');
//middleware
app.use(express.static('./public'));
app.use (express.json ());
//routes
app.use ('/api/v1/tasks', tasksRoute);
app.use ('/api/v1/posts', postsRoute);
app.get ('/', (req, res) => res.send ('Hello World!'));
const start = async () => {
  try {
    await connectDB (process.env.MONGO_URI);
    app.listen (port, console.log (`Example app listening on port ${port}!`));
  } catch (err) {
    console.log (err);
  }
};
start()
