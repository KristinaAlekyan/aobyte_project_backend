import { findAllCategories, findSingleCategory } from "../services/categoryService.js"

const getAllCategories = async (req, res, next) => {
    try {
        const filter = {}
        const categories = await findAllCategories(filter)
        return res.json({ data: categories })
    }
    catch (e) {
        next(e)
    }
}

const getSingleCategory = async (req, res, next) => {
    try {
        const id = req.params.categoryId
        const singleCategory = await findSingleCategory(id)
        return res.json({ data: singleCategory })
    } catch (e) {
        next(e)
    }
}


export { getAllCategories, getSingleCategory }
