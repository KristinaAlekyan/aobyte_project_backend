import { getAllCategoriesService, getCategoryByIdService } from "../services/categoryService.js"

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

const getCategoryById = async (req, res, next) => {
    try {
        const id = req.params.categoryId
        const category = await getCategoryByIdService(id)
        return res.json({ data: category })
    } catch (e) {
        next(e)
    }
}

export { getAllCategories, getCategoryById }
