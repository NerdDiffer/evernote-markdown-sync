const express = require('express');
const path = require('path');

const app = express();

const pathToStaticDir = path.resolve(__dirname, '..', 'client');
app.use(express.static(pathToStaticDir));

/* Routes */
app.get('/', function(req, res) {
  res.status(200).send();
});

var port = process.env.PORT || 8000;

app.listen(port);
console.log('Server is listening on port', port);
