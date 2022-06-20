import { Household } from '../models/householdProduct.js';

function findAll(filter) {
  return Household.find(filter).exec();
}
export default { findAll};
