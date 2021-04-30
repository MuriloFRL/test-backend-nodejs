const express = require('express')
const router = express.Router()
const Product = require('../models/product')

//route to user get a list of all products
router.get('/products', async (req, res)=>{
    try{
        const products = await Product.find()
        res.json(products)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

//route to user get a list of products filtered by ID
router.get('/products/:id', (req, res)=>{

})

//route to user add a product to the base
router.post('/products', async(req, res)=>{
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category
    })

    try{
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//route to user update a product category
router.patch('/products/:id', (req, res)=>{

})

//route to user delete a product from the base
router.delete('/products/:id', (req, res)=>{

})

module.exports = router