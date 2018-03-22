var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('./config/connection');
var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(cors());

app.use('/api', require('./features/crops/routes'));

app.listen(3000, function () {
    console.log(`Express listenning on port: ${3000}`);
});


