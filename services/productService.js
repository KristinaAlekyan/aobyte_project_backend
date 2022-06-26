import ProductModel from "../models/product.js"

const findAllProducts = async (filter) => {
    return await ProductModel.find(filter)
}

const findSingleProduct = async (_id) => {
    return await ProductModel.findOne({ _id })
}

export { findAllProducts, findSingleProduct }
