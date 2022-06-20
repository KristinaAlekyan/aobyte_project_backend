import express from 'express';
import productService from '../services/productService.js';

const router = express.Router();

/**
 * 
 * get all products which category is household
 * */

router.get('/', async (req, res, next) => {
  const filter = {category: "Household"};
  const household = await productService.findAll(filter);
  res.status(200).json({ data: household });
});

export default router;
