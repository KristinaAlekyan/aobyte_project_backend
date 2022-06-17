import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(cors())

const products = [
    {"id":1,"product_name":"Pennn","product_price":"200", "category": "Grocery", "image": "images/1.jpg"},
];

mongoose.connect(process.env.DB_URL,
    {useNewUrlParser: true},  
    {useUnifiedTopology: true},
    () => {console.log("connected mongo db")}
)

const ProductsSchema = new mongoose.Schema({
    product_name: {type: String},
    product_price: {type: String},
    category: {type: String},
})

const Products =  mongoose.model("Products", ProductsSchema)

app.get("/", (req, res) => {
    res.send(products)
});

app.get("/products", (req, res) => {
    const products1 = Products.find({})
    console.log(products1)
    res.send(products1)
});

app.get("/products", (req, res) => {
    res.send(products)
});

app.listen(process.env.Port);