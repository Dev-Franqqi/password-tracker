const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const routes = require('./routes/passwordEntryRoute');

const app = express();

//To accept request from all client even clients without ssl certificate
app.use(cors());

app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use('/passwords', routes);



mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongoose connected successfully');
    app.listen(process.env.PORT, () => {
      console.log('Server started');
    });
  })
  .catch((err) => console.error('Connection error:', err));
