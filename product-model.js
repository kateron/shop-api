var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Type = require("./type-model");
var Review = require("./review-model");

// this will be our data base's data structure 
var ProductSchema = new Schema(
  {
    id: Number,
    name: String,
    description: String,
    price: Number,
    type_id: Number,
    user_id: Number
  },
  { timestamps: true,
    toJSON: { virtuals: true } 
  
  }
);

ProductSchema.virtual('type', {
  ref: 'Type', // The model to use
  localField: 'type_id', // Find people where `localField`
  foreignField: 'id', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

ProductSchema.virtual('reviews', {
  ref: 'Review', // The model to use
  localField: 'id', // Find people where `localField`
  foreignField: 'product_id', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model('Product', ProductSchema);