var express = require('express');
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
var qs = require('querystring');
var app = express();

// dotenv.load();
var api_key = process.env.ORGHUNTER_API_KEY;

// config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/bower_components')));
// app.use(express.methodOverride());


// db
// var db;
// var MongoClient = require('mongodb').MongoClient;
// var ObjectId = require('mongodb').ObjectId;
// var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/sandbox';
// MongoClient.connect(mongoUrl, function(err, database) {
//   if (err) { console.log(err); }
//   console.log("Connected correctly to server");
//   db = database;
//   process.on('exit', db.close);
// });


// routes
app.get('/', function(req, res){
  res.render('index');
});

app.get('/api', function(req, res){
  var base_url = "http://data.orghunter.com/v1/charitysearch?";
  var api_key = process.env.ORGHUNTER_API_KEY;
  var city = req.query.city;
  var state = req.query.state;
  var zipCode = req.query.zipCode;
  // var missionStatement = res.params.missionStatement;
  console.log(city);
  console.log(state);
  console.log(zipCode);
  // If the zipCode is entered in input, do request for zip
  if (req.query.zipCode !== "undefined") {
    request(base_url + "user_key=" + api_key + "&zipCode=" + zipCode + "&eligible=1", function(err, response, data){
      console.log(err, data);
      if (!err && response.statusCode == 200){
        res.send(data);
      }res.end();
    }) 
  // If the city and state are entered in input, do following
  } else if (req.query.city !== "undefined" && req.query.state !== "undefined") {
    request(base_url + "user_key=" + api_key + "&city=" + city + "&state=" + state + "&eligible=1", function(err, response, data){
      console.log(err, data);
      if (!err && response.statusCode == 200){

        res.send(data);
      }res.end();
    }) 
  }

});

// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// });

// db.collection('kittens').find({}).toArray(function(err, results){
//   console.log(results);
// });

// db.collection('kittens').find({}).sort({name: 1}).toArray(function(err, result){
//   console.log(result);
// });



app.listen(process.env.PORT || 3000);