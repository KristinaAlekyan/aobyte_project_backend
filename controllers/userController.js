import { validationResult } from "express-validator";

import { registrationUser, loginUser } from "../services/userService.js";
import ApiError from "../errors/apiError.js";
import UserModel from "../models/user.js";

const register = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("Validation Error", errors.array()))
        }

        const { firstName, lastName, email, password } = req.body;
        const userData = await registrationUser(firstName, lastName, email, password);
        return res.json(userData)
    } catch (e) {
        next(e)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userData = await loginUser(email, password);
        return res.json(userData)
    } catch (e) {
        next(e)
    }
}


export { register, login }


