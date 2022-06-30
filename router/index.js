import express from "express";

import { getAllProducts, getFilteredProducts, getSingleProduct, addProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { getAllCategories, getSingleCategory } from "../controllers/categoryController.js";
import { register, login } from "../controllers/userController.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:productId", getSingleProduct);
router.post("/products", addProduct);
router.patch("/products/:productId", updateProduct);
router.delete("/products/:productId", deleteProduct);
router.get("/categories", getAllCategories);
router.post("/products/:categoryId", getFilteredProducts);
router.get("/categories/:categoryId", getSingleCategory);
router.post("/register", register);
router.post("/login", login);

export default router;