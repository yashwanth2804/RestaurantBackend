const express = require('express')
const restaurantscontroller = require('./restaurantscontroller')
const mongoose = require ('mongoose')

//var mongoDB = 'mongodb://127.0.0.1/RestaurantsDB';
//mongodb://<dbuser>:<dbpassword>@ds161894.mlab.com:61894/restaurants_db
var mongoDB = 'mongodb://hackerEarth:'+process.env.dbpwd+'@ds161894.mlab.com:61894/restaurants_db';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const restaurantsrouter = express.Router()

var bodyParser = require('body-parser')
restaurantsrouter.use( bodyParser.json() );       // to support JSON-encoded bodies
restaurantsrouter.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
restaurantsrouter.route('/').get(restaurantscontroller.getRestaurants);
restaurantsrouter.route('/search').post(restaurantscontroller.getSearchRestaurants);
restaurantsrouter.route('/cuisines').get(restaurantscontroller.getCuisines);
 

// restaurantsrouter.route('/like').get(restaurantscontroller.postLikes);

module.exports = restaurantsrouter