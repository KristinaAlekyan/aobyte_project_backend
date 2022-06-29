import mongoose from "mongoose";

// Product Schema

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
});

const Product = mongoose.model('Product', ProductSchema);

export default Product 
