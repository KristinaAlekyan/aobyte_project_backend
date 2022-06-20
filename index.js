import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import productsRouter from './routes/products.js';
import householdRouter from './routes/household.js';
import groceryRouter from './routes/grocery.js';
import personalcareRouter from './routes/personalcare.js';
import beverageRouter from './routes/beverage.js';
import userRouter from './routes/user.js';
import { appConfig, dbConfig } from './config/config.js';

const app = express();
// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/products', productsRouter);

app.use('/category/household', householdRouter);

app.use('/category/grocery', groceryRouter);

app.use('/category/personalcare', personalcareRouter);

app.use('/category/beverage', beverageRouter);

app.use('/registration', userRouter);

mongoose.connect(dbConfig.dbUrl, (err) => {
    if (err) {
        console.error(err);
        process.exit();
    }

    // start the Express server
    app.listen(appConfig.port, () => {
        console.log(`Server is running on port: ${appConfig.port}`);
    });
});
