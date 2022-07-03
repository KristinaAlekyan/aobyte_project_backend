import express from "express";

import { getAllProducts, getSingleProduct, addProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { getAllCategories, getSingleCategory } from "../controllers/categoryController.js";
import { register, login, getAllUsers, activate } from "../controllers/userController.js";
import { addOrder, getAllOrders } from "../controllers/orderController.js";
import checkAuth from "../middlewares/authMiddleware.js"

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:productId", getSingleProduct);
router.post("/products", addProduct);
router.patch("/products/:productId", updateProduct);
router.delete("/products/:productId", deleteProduct);

router.get("/categories", getAllCategories);
router.get("/categories/:categoryId", getSingleCategory);
router.post("/register", register);
router.post("/login", login);

router.get("/users", checkAuth, getAllUsers)

//router.get("/activate/:link", activate)

router.get("/orders", getAllOrders);
router.post("/orders", addOrder);




export default router;