const express = require('express');
const products = express.Router();
const { getAllProducts, getOneProduct , createProduct, deleteProduct, updateProduct} = require("../queries/products.js");

products.get("/", async (req,res)=>{

    try{
        const allProducts = await getAllProducts();
        if(allProducts.length){
            res.status(200).json(allProducts)
        } else {
            res.status(404).json({error: "No Products Returned From Database"})
        }
    }catch(err){
        console.log(err)
    }
});

products.get("/:id", async (req,res)=>{
    const { id } = req.params;
    try{
        const product = await getOneProduct(id);
        if(product.id){
            res.status(200).json(product)
        } else {
            res.status(404).json({ error: "Product not found" })
        }
    }catch(err){
        console.log(err)
    }
})

module.exports = products;