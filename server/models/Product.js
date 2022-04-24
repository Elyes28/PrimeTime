import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
var Product = new mongoose.Schema({
    productName: {
        type: String,
        required: true
      },
      slug: {
        type: String,
        required: true
      },

    
      description: {
        type: String,
        required: true
      },
    
      categories: {
        type: Array,
      },
      price: {
        type: Number,
        required: true,
        min: 0
      },
      size: {
        type: String,
         
      },
      stockQuantity: {
        type: Number,
        required: true,
        min: 1
      },
      image: {
        type: String,
         
      },

      images: [String],
      arModel: {
        type: String
      },
      threeDModel: {
        type: String
      },
      rating:{
        type:Number
      },
      numReviews:{
        type:Number
      },
      color:{
        type:String
      },
      promo:{
        type:Number
      },
      reviews: [reviewSchema],
    },
    {timestamps :true});


export default mongoose.model("Product", Product);