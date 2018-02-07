var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var app = express();

app.use('/',index);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));





var port = process.env.PORT || 8000;
app.listen(port);
module.exports = app;
