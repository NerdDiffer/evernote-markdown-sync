const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const edam = require('./edam');
require('dotenv').config();

const app = express();

/* Middleware */
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pathToStaticDir = path.resolve(__dirname, '..', 'client');
app.use(express.static(pathToStaticDir));

/* Routes */
app.get('/', (req, res) => {
  res.status(200).send();
});

app.use('/edam', edam);

const port = process.env.PORT || 8000;

app.listen(port);
console.log('Server is listening on port', port);
