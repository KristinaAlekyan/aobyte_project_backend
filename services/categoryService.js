import CategoryModel from "../models/category.js"

const findAllCategories = async (filter) => {
    return await CategoryModel.find(filter)
}

const findSingleCategory = async (_id) => {
    return await CategoryModel.findOne({ _id })
}

export { findAllCategories, findSingleCategory }
