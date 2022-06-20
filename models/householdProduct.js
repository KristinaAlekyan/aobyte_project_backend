import mongoose from 'mongoose';

const HouseholdeProductSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
  category: { type: String },
});

export const Household = mongoose.model('Household', HouseholdeProductSchema);
