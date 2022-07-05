import mongoose from "mongoose";

// Category Schema

const CategorySchema = new mongoose.Schema({
    name: { type: String }
});

const Category = mongoose.model('Category', CategorySchema);

export default Category
