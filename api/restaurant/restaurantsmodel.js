const mongoose = require('mongoose')
const Schema = mongoose.Schema;


/*
{
    "_id" : ObjectId("5c4206ba6cf82b021c385c68"),
    "Restaurant ID" : 6318506,
    "Restaurant Name" : "Ooma",
    "Cuisines" : "Japanese, Sushi",
    "Average Cost for two" : 1500,
    "Currency" : "Botswana Pula(P)",
    "Has Table booking" : "No",
    "Has Online delivery" : "No",
    "Aggregate rating" : 4.9,
    "Rating color" : "Dark Green",
    "Rating text" : "Excellent",
    "Votes" : 365
}


*/
//let Post = null

const RestaurantsSchema = new Schema({
  "Restaurant ID": Number,
  "Restaurant Name": String,
  Cuisines:String,
  "Average Cost for two":Number,
  Currency:String,
  "Has Table booking" :String,
  "Has Online delivery" :String,
  "Aggregate rating" : Number,
  "Rating color" : String,
  "Rating text" : String
});

Restaurant = mongoose.model('Restaurant', RestaurantsSchema)
module.exports = Restaurant



