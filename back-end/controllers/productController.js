const express = require('express');
const products = express.Router();
const { getAllProducts, getOneProduct , createProduct, deleteProduct, updateProduct} = require("../queries/products.js");

products.get("/", async (req,res)=>{
    const { Featured , Low , High } = req.query;
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
});

products.post("/", async (req,res)=>{
    let { body } = req;

    if(!/[A-Za-z]/.test(body.name)){
        res.send("Name must include letters")
        return;
    }

    try{
        const newProduct = await createProduct(body);
        if(newProduct.id){
            res.status(200).json(newProduct)
        }else{
            res.status(404).json({error: "Unable to create product"})
        }    
    }catch(err){
        console.log(err)
    }
});

products.put("/:id", async (req,res)=>{
    const { id } = req.params;
    const { body } = req;

    if(!/[A-Za-z]/.test(body.name)){
        res.send("Name must include letters")
        return;
    }

    try{
        const uProduct = await updateProduct(id, body);
        if(uProduct.id){
            res.status(200).json(uProduct)
        }else{
            res.status(404).json({error: "Unable to update product."})
        }
    }catch(err){
        console.log(err)
    }
});

products.delete("/:id", async (req, res)=>{
    const { id } = req.params;

    try{
        const deletedProduct = await deleteProduct(id);
        if(deletedProduct.id){
            res.status(200).json(deletedProduct)
        } else {
            res.status(404).json({error: "No product found."})
        }
    }catch(err){
        console.log(err)
    }
})

module.exports = products;