import mongoose from "mongoose";

// Order Schema

const OrderSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: { type: Number, default:1 },
    price: { type: Number, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);

export default Order 
