import express from "express";

import { getAllProducts, getSingleProduct } from "../controllers/productController.js";
import { getAllCategories, getSingleCategory } from "../controllers/categoryController.js";
import { register, login } from "../controllers/userController.js";

const router = express.Router();

router.get("/products", getAllProducts)
router.get("/products/:productId", getSingleProduct)
router.get("/categories", getAllCategories)
router.get("/categories/:categoryId", getSingleCategory)
router.post("/register", register)
router.post("/login", login)

export default router;