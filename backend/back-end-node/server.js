var express = require('express');
var path = require('path');
var body_parser = require('body-parser');
var cors = require('cors');

var app = express();
const PORT = 8080;

var controller = require('./weather-api');

//middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));

// for cross orgin or same host
app.use(cors()); 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  return "hello";
    return res.send("Hello World");
});

app.get('/getWeather/:city/:country', controller.getWeather);

app.listen(PORT, '0.0.0.0', function() {
   console.log('listening on port ' + PORT); 
});