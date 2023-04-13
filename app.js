const express = require ('express');
const app = express ();
const port = 3000;
const connectDB = require ('./db/connect');
require ('dotenv').config ();
const notFound = require ('./middleware/not-found.js');
const errorHandlerMiddleware = require ('./middleware/error-handler');

const tasksRoute = require ('./routes/tasks.js');
const postsRoute = require ('./routes/posts.js');
//middleware
app.use (express.static ('./public'));
app.use (express.json ());
//routes
app.use ('/api/v1/tasks', tasksRoute);
app.get ('/', (req, res) => res.send ('Hello World!'));
app.use (notFound);
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    app.listen (port, console.log (`Example app listening on port ${port}!`));
    await connectDB (process.env.MONGO_URI);
  } catch (err) {
    console.log ('err');
  }
};
start ();
