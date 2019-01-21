const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
 /*
    "Restaurant ID" : 6304287,
    "Country Code" : 162,
    "City" : "Makati City",
    "Address" : "Little Tokyo, 2277 Chino Roces Avenue, Legaspi Village, Makati City",
    "Locality" : "Little Tokyo, Legaspi Village, Makati City",
    "Locality Verbose" : "Little Tokyo, Legaspi Village, Makati City, Makati City",
    "Longitude" : 121.014101,
    "Latitude" : 14.553708

 */
 
const AddressSchema = new Schema({
   // _id: new Schema.Types.ObjectId,
   // postId: Schema.Types.ObjectId,

   "Restaurant ID" : Number,
    "Country Code" : Number,
    "City" : String,
    "Address" : String,
    "Locality" : String,
    "Locality Verbose" : String,
    "Longitude" : Number,
    "Latitude" : Number, 
        
})
Address = mongoose.model('Address', AddressSchema)
module.exports = Address
  
 







