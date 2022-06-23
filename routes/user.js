import express from 'express';
import userService from '../services/userService.js';

const router = express.Router();

/* get one user */
router.get('/', async (req, res, next) => {
    const filter = {};
    const user = await userService.find(filter);
    res.status(200).json({ data: user });
});

/* create new user */

router.post('/', async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    const filter = {};
    const users = await userService.find(filter);
    let count = 0;
    for( let i = 0; i < users.length; i++ ){
        if(users[i].email === email ){
            count +=1;
            break
        }
    }    
    if(count === 0){
        const result = await userService.createUser({
            firstName,
            lastName,
            email,
            password
        });
        res.status(200).json({ user : result, message : "Registerd" });
    } else res.status(400).json({message:"Fail registration"})  
});

export default router;
