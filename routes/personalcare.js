import express from 'express';
import productService from '../services/productService.js';

const router = express.Router();

/**
 * 
 * get all products which category is personal care
 * */

router.get('/', async (req, res, next) => {
  const filter = {category: "Personal care"};
  const personalcare = await productService.findAll(filter);
  res.status(200).json({ data: personalcare });
});

export default router;
