import express from "express";

import { getAllProducts, getSingleProduct, addProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { getAllCategories, getCategoryById } from "../controllers/categoryController.js";
import { register, login, getAllUsers, activate } from "../controllers/userController.js";
import { createOrder, getOrders } from "../controllers/orderController.js";
import checkAuth from "../middlewares/authMiddleware.js"

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:productId", getSingleProduct);
router.post("/products", addProduct);
router.patch("/products/:productId", updateProduct);
router.delete("/products/:productId", deleteProduct);

router.get("/categories", getAllCategories);
router.get("/categories/:categoryId", getCategoryById);
router.post("/register", register);
router.post("/login", login);

router.get("/users", checkAuth, getAllUsers)

//router.get("/activate/:link", activate)

router.get("/orders", checkAuth, getOrders);
router.post("/orders", checkAuth, createOrder);




export default router;