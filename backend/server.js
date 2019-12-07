const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

//require the files:
const activitiesRouter = require('./routes/activities');
const usersRouter = require('./routes/activities');
//use the files. below - everytime a user visits the below routes it will load everything in the activities router. Same with users.
app.use('/activities', activitiesRouter);
app.use('users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
