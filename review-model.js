var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// this will be our data base's data structure 
var ReviewSchema = new Schema(
  {
    id: Number,
    comment: String,
    rating: Number,
    product_id: Number,
    user_id: Number
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model('Review', ReviewSchema);