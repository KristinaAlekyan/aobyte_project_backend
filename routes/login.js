import express from 'express';
import userService from '../services/userService.js';


const router = express.Router();

/* get one user and log in  */

router.get('/', async (req, res, next) => {   
    //????? How take from req.body filter email: ????
    const filter = {};
    console.log(filter)
    const user = await userService.find(filter);
    res.status(200).json({ data: user });
});

export default router;
