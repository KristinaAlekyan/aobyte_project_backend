import express from 'express';
import productService from '../services/productService.js';

const router = express.Router();

/**
 * get all products
 * */
router.get('/', async (req, res, next) => {
    const filter = {};
    const products = await productService.findAll(filter);
    res.status(200).json({ data: products });
});

/**
 * create new product
 * */

router.post('/', async (req, res, next) => {
    const { name, price, category } = req.body;

    const result = await productService.createProduct({
        name,
        price,
        category,
    });
    res.status(200).json({ result });
});

export default router;
