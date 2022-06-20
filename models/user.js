import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: {type: String, required: true}
})

export const User = mongoose.model('User', UserSchema);
