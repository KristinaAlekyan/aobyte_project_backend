import express from 'express';
import productService from '../services/productService.js';

const router = express.Router();

/*get all products which category is grocery*/

router.get('/', async (req, res, next) => {
    const filter = {category: "Groceries"};
    const grocery = await productService.findAll(filter);
    res.status(200).json({ data: grocery });
});

export default router;
