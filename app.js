const http = require('http');
const express = require('express');
const hostname = '127.0.0.1';
const port = 5000;

const app = express();

var cors = require('cors');
app.use(cors()); // Use this after the variable declaration

var controller = require('./controller');
app.use('/app', controller);


app.listen(port, function() {
  console.log("Server started ...");
});