'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const messages = require('./routes/classifieds');
app.use('/classifieds', messages);

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
