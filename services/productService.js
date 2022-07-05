import ProductModel from "../models/product.js"

const getAllProductsService = async (filter, query, sort) => {
    if (query.sort) {
        switch (query.sort) {
            case 'asc':
                sort.price = 1;
                break;
            case 'desc':
                sort.price = -1;
                break;
        }
    }
    if (query.search) {
        const searchReg = new RegExp(query.search, 'ig');
        filter.$or = [{ name: searchReg }];
    }

    const products = await ProductModel.find(filter)
        .sort(sort)

    return products
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
