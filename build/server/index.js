'use strict';

var express = require('express');
var app = express();

app.use(function (req, res, next) {
  return res.send({ message: 'awesome' });
});

console.log(process.env.FOONAR);
app.listen(3000);