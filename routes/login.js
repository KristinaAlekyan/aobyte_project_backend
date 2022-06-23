import express from 'express';
import userService from '../services/userService.js';


const router = express.Router();

router.post('/', async (req, res, next) => {   
    const {email, password} = req.body;
    
    const filter = {email: email};

    const users = await userService.find(filter);
    
    if(users.length){
        if(password === users[0].password){
            res.send({message:"login sucess", user:users[0]});
        } else {
            res.send({message:"wrong credentials"})
        }
    } else {
        res.send({ message: "Email not found" });
    }

    
});

export default router;
