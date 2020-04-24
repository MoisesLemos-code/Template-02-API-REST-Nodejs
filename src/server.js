const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mercadoapp',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Acces-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Acces-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(routes);
app.listen(3333);
