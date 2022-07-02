import { getAllProductsService, getSingleProductService, addProductService, 
         updateProductService, deleteProductService } from "../services/productService.js"

const getAllProducts = async (req, res, next) => {
    try {
        const filter = {};
        const query = req.query.category;
        const products = await getAllProductsService(query);
        return res.json({ data: products })
    }
    catch (e) {
        next(e)
    }
}

const getFilteredProducts = async (req, res, next) => {
    try {
        const id = req.params.categoryId;
        const filter = {category: id};
        const products = await getAllProductsService(filter);

        return res.json({ data: products })
    }
    catch (e) {
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

export { getAllProducts, getFilteredProducts, getSingleProduct, addProduct, updateProduct, deleteProduct }
