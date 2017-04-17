var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./lib'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/html/index.html'));
});

app.listen(3000, function () {
  console.log('App running on port 3000')
});