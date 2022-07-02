import ProductModel from "../models/product.js"

const getAllProductsService = async (filter) => {
    return await ProductModel.find(filter)
}

const getSingleProductService = async (_id) => {
    return await ProductModel.findOne({ _id })
}
const addProductService = async (name, price, image, category) => {
    return await ProductModel.create({ name, price, image, category })
}

const updateProductService = async (id, name, price, image, category,) => {
    const editProduct = await ProductModel.updateOne({ _id: id },
        {
            $set: {
                name: name,
                price: price,
                image: image,
                category: category
            },
        })
    return {
        editProduct,
    }
}

const deleteProductService = async (_id) => {
    const deletedProduct = await ProductModel.deleteOne({ _id });

    return deletedProduct
}

export { getAllProductsService, getSingleProductService, addProductService, updateProductService, deleteProductService }
