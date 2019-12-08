const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  // Bugfix - (node:45973) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor. Added below.

  useUnifiedTopology: true,

  //adding above code works! yay!^^

  useNewUrlParser: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

//require the files:
const activitiesRouter = require('./routes/activities');
const usersRouter = require('./routes/users');
const urlRouter = require('./routes/urls');
//use the files. below - everytime a user visits the below routes it will load everything in the activities router. Same with users.
app.use('/activities', activitiesRouter);
app.use('/users', usersRouter);
app.use('/urls', urlRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
