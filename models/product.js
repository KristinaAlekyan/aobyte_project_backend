import mongoose from 'mongoose';

// Product Schema

const ProductSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: String },
    category: { type: String },
});

export const Product = mongoose.model('Product', ProductSchema);
