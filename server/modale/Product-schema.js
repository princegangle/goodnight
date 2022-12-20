import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  id: {
    type: String ,
    required: true,
    unique: true,
  },
  url: String,
  detailurl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
