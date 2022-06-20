import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import productsRouter from './routes/products.js';
import householdProductsRouter from './routes/household.js';
import { appConfig, dbConfig } from './config/config.js';

const app = express();
// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/products', productsRouter);

app.use('/category/household', householdProductsRouter);

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
