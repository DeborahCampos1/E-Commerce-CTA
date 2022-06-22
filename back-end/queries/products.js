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
            "INSERT INTO products(name, description, image, weight, price, rating, featured, in_stock) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
            [product.name, product.description, product.image, product.weight, product.price, product.rating, product.featured, product.in_stock]
        )
        return newProduct;
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
        return deletedProduct;
    }catch(err){
        return err
    }
};

const updateProduct = async (id, product)=>{
    try{
        const updatedProduct = await db.one(
            "UPDATE products SET name=$1, description=$2, image=$3, weight=$4, price=$5, rating=$6, featured=$7, in_stock=$8 WHERE id=$9 RETURNING * ",
            [product.name, product.description, product.image, product.weight, product.price, product.rating, product.featured, product.in_stock, id]
        );
        return updatedProduct;
    }catch(err){
        console.log("query error")
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