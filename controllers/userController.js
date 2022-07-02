import { validationResult } from "express-validator";

import { registrationUser, loginUser, getAllUsersService, activateService } from "../services/userService.js";
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

const getAllUsers = async (req, res, next) => {
    try {
        const filter ={}
        const users = await getAllUsersService(filter);
        return res.json(users)
    } catch (e) {
        next(e)
    }
}

const activate = async(req, res, next)=>{
    try {
        const activationLink = req.params.link
        await activateService(activationLink)
        return res.redirect(process.env.CLIENT_URL)
    } catch (e) {
        next(e)
    }
}

export { register, login, getAllUsers, activate}


