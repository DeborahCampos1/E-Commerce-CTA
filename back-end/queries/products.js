const db = require("../db/dbConfig.js");

const getAllProducts = async ()=>{
    try{
        const allProducts = await db.any("SELECT * FROM products");
        return allProducts;
    } catch(err) {
        return err;
    }
};

const getOneProduct = async (id) =>{
    try{
        const product = await db.one("SELECT * FROM products WHERE id=$1", id);
        return product;
    }catch(err){
        return err;
    }
}

const createProduct = async (product) =>{
    try{
        const newProduct = await db.one(
            "INSERT INTO products(name, image, weight, price, in_stock) VALUES ($1,$2,$3,$4,$5) RETURNING *",
            [product.name, product.image, product.weight, product.price, product.in_stock]
        )
    }catch(err){
        return err;
    }
}

const deleteProduct = async (id) =>{
    try{
        const deletedProduct = await db.one(
            "DELETE FROM products WHERE id = $1 RETURNING *",
            id
        )
        return deletedProduct
    }catch(err){
        return err
    }
}

const updateProduct = async (id, product) =>{
    try{
        const updatedProduct = await db.one(
            "UPDATE products SET name=$1, image=$2, weight=$3, price=$4, in_stock=$5 WHERE id=$6 RETURNING *",
            [product.name, product.image, product.weight, product.price, product.in_stock, id]
        )
        return updatedProduct
    }catch(err){
        return err;
    }
}

module.exports = {
    getAllProducts,
    getOneProduct,
    deleteProduct,
    createProduct,
    updateProduct
};