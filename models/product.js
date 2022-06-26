import mongoose from "mongoose";

// Product Schema

const ProductSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: String },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
});

const Product = mongoose.model('Product', ProductSchema);

export default Product 
