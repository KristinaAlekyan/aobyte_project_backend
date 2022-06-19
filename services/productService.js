import { Product } from '../models/product.js';

function findAll(filter) {
  return Product.find(filter).exec();
}
function createProduct(productDto) {
  return Product.create(productDto);
}

export default { findAll, createProduct };
