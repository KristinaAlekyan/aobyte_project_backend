import mongoose from "mongoose";

// User Schema

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unqiue: true, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

export default User 
