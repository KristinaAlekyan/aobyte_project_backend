import express from 'express';
import productService from '../services/productService.js';

const router = express.Router();

/**
 * 
 * get all products which category is beverage
 * */

router.get('/', async (req, res, next) => {
  const filter = {category: "Beverages"};
  const beverage = await productService.findAll(filter);
  res.status(200).json({ data: beverage });
});

export default router;
