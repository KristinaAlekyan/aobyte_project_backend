import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';

import UserModel from "../models/user.js";
import ApiError from "../Errors/apiError.js";
import UserDto from "../dtos/userDto.js";
import mailService from "./mailService.js"


const registrationUser = async (firstName, lastName, email, password) => {
    const candidate = await UserModel.findOne({ email })

    if (candidate) throw ApiError.AlreadyExists(`User with such an email already exists`);

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);
    
    const activationLink = uuidv4()

    const user = await UserModel.create({ firstName, lastName, email, password: hashPassword, activationLink });
    
    //await mailService.sendActivationMail(email, `${process.env.API_URL}/activate/${activationLink}`)

    const userDto = new UserDto(user)

    const token = jwt.sign({ _id: user._id }, 'JwtKey');

    return {
        user: userDto,
        token
    }
}

const loginUser = async (email, password) => {
    try {
        const user = await UserModel.findOne({ email });
        if (!user) throw ApiError.BadRequest(`User with this email was not found`);

        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) throw ApiError.BadRequest(`Wrong email or password`)

        const userDto = new UserDto(user)

        const token = jwt.sign({ _id: user._id }, 'JwtKey');

        return {
            user: userDto,
            token,
        }
    } catch (err) {
        throw ApiError.AuthorizationFailed(`Authorization is failed`);
    }
}

const getAllUsersService = async (filter) => {
    try {
        return await UserModel.find(filter);
    } catch (err) {
        throw ApiError.BadRequest(`User no access`);
    }
};

const activateService = async (activationLink) => {
    const user = await UserModel.findOne({ activationLink })
    if (!user) throw ApiError.BadRequest(`Uncorrect activation link`)
    user.isActivated = true
    await user.save()
}


export { registrationUser, loginUser, getAllUsersService, activateService }
