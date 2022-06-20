import express from 'express';
import householdProductService from '../services/householdProductService.js';

const router = express.Router();

/**
 * get all products which category is household
 * */
router.get('/', async (req, res, next) => {
  const filter = {category:"Household"};
  const householdProducts = await householdProductService.findAll(filter);
  res.status(200).json({ data: householdProducts });
});

export default router;
