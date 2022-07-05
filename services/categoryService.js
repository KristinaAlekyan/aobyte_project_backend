import CategoryModel from "../models/category.js"

const getAllCategoriesService = async (filter) => {
    return await CategoryModel.find(filter)
}

const getSingleCategoryService = async (_id) => {
    return await CategoryModel.findOne({ _id })
}

export { getAllCategoriesService, getSingleCategoryService }
