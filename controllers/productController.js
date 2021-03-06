import {
    getAllProductsService, getSingleProductService, addProductService,
    updateProductService, deleteProductService
} from "../services/productService.js"

const getAllProducts = async (req, res, next) => {
    try {
        const { query } = req;
        const filter = {};
        const sort = {}
        const products = await getAllProductsService(filter, query, sort)
        return res.json({ data: products })
    }
    catch (e) {
        res.json(e)
        next(e)
    }
}

const getSingleProduct = async (req, res, next) => {
    try {
        const id = req.params.productId;
        const singleProduct = await getSingleProductService(id);

        return res.json(singleProduct)
    } catch (e) {
        next(e)
    }
}

const addProduct = async (req, res, next) => {
    try {
        const { name, price, image, category } = req.body;
        const product = await addProductService(name, price, image, category)
        return res.json(product)
    } catch (e) {
        next(e)
    }
}
const updateProduct = async (req, res, next) => {
    try {
        const id = req.params.productId;
        const { name, price, image, category } = req.body
        const product = await updateProductService(id, name, price, image, category)

        return res.json(product)
    } catch (e) {
        next(e)
    }
}
const deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.productId
        const removedProduct = await deleteProductService(id)
        return res.json(removedProduct)
    } catch (e) {
        next(e)
    }
}

export { getAllProducts, getSingleProduct, addProduct, updateProduct, deleteProduct }
