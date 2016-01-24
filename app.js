// var env = require('node-env-file');
// var dotenv = require('dotenv').config();
var express = require('express');
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');
// var logger = require('morgan');
var config = require('./config');
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
// app.use(express.logger('dev'));
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
  console.log(city);
  console.log(state);
  console.log(zipCode);
  console.log(api_key);
  // If the zipCode is entered in index, do following
  request(base_url + "user_key=" + api_key + "&zipCode=" + zipCode + "&eligible=1", function(err, response, data){
    console.log(err, data);
    if (!err && response.statusCode == 200){
      var charData = qs.parse(data);
      var charityName = charData.charityName;
      var city = charData.city;
      var state = charData.state;
      var category = charData.category;
      var zip = charData.zipCode;
      var mission = charData.missionStatement;
      var website = charData.website;

      // res.send(data);
    }
  })
  // If the city and state are entered in index, do following
  request(base_url + "user_key=" + api_key + "&city=" + city + "&state=" + state + "&eligible=1", function(err, response, data){
    console.log(err, data);
    if (!err && response.statusCode == 200){
      var charData = qs.parse(data);
      var charityName = charData.charityName;
      var city = charData.city;
      var state = charData.state;
      var category = charData.category;
      var zip = charData.zipCode;
      var mission = charData.missionStatement;
      var website = charData.website;

      res.send(data);
    }
  })
})


// app.get('/config', function(req, res){
//   if (env === 'develop'){
//     res.send(developConfig);
//   }else if(env === 'staging') {
//     res.send(stagingConfig);
//   }else if(env === 'prod') {
//     res.send(prodConfig);
//   }
// })

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