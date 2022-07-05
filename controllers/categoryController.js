import { getAllCategoriesService, getSingleCategoryService } from "../services/categoryService.js"

const getAllCategories = async (req, res, next) => {
    try {
        const filter = {}
        const categories = await getAllCategoriesService(filter)
        return res.json({ data: categories })
    }
    catch (e) {
        next(e)
    }
}

const getSingleCategory = async (req, res, next) => {
    try {
        const id = req.params.categoryId
        const singleCategory = await getSingleCategoryService(id)
        return res.json({ data: singleCategory })
    } catch (e) {
        next(e)
    }
}

export { getAllCategories, getSingleCategory }
