import { findAllProducts, findSingleProduct } from "../services/productService.js"

const getAllProducts = async (req, res, next) => {
    try {
        const filter = {};
        const products = await findAllProducts(filter);

        return res.json({ data: products })
    }
    catch (e) {
        next(e)
    }
}

const getSingleProduct = async (req, res, next) => {
    try {
        const id = req.params.productId;
        const singleProduct = await findSingleProduct(id);

        return res.json(singleProduct)
    } catch (e) {
        next(e)
    }
}

export { getAllProducts, getSingleProduct }
