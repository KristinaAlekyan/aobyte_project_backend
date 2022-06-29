import mongoose from "mongoose";
import { dbConfig } from './config/config.js';
import ProductModel from "./models/product.js";
import CategoryModel from "./models/category.js";

mongoose.connect(dbConfig.dbUrl, (err) => {
    if (err) {
        console.error(err);
        process.exit();
    }
});

const seedProducts = [
    {
        name: "Pennn",
        price: "250",
        image:"https://officekit.am/wp-content/uploads/2020/06/13183205_1020794494675470_1494654795_n-1.jpg"
    },
    {
        name: "Fork",
        price: "1000",
        image:"https://m.media-amazon.com/images/I/61h743o6naL._AC_SL1500_.jpg"
    },
    {
        name: "Peach",
        price: "400",
        image:"https://static.libertyprim.com/files/familles/peche-large.jpg?1574630286"
    },
    {
        name: "Chicken",
        price: "2000",
        image:"https://5.imimg.com/data5/NT/QU/MY-35471420/broiler-chicken-meat-250x250.jpg"
    },
    {
        name: "Spoon",
        price: "1000",
        image:"https://englishlib.org/dictionary/img/wlibrary/s/60479c43ef8671.22183642.jpg"
    }    
]

const seedCategories = [
    {
        name: "Househould"
    },
    {
        name: "Personal Care"
    },
    {
        name: "Beverage"
    },
    {
        name: "Grocery"
    }
]

const seedProductDB = async () =>{
    await ProductModel.insertMany(seedProducts)
}

seedProductDB().then(() =>
    mongoose.connection.close()
)

const seedCategoryDB = async () =>{
    await CategoryModel.insertMany(seedCategories)
}

seedCategoryDB().then(() =>
    mongoose.connection.close()
)