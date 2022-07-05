import ApiError from "../Errors/apiError.js";
import jwt from 'jsonwebtoken';

const checkAuth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    console.log("token",token)

    if (token) {
        try {
            const decryptedToken = jwt.verify(token, 'JwtKey');
            req.userId = decryptedToken._id;
            next();
        } catch (err) {
            next(ApiError.UnAuthorizedError(`User1 no access`));
        }
    } else next(ApiError.UnAuthorizedError(`User2 no access`));
}

export default checkAuth;
