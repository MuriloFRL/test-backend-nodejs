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

//route to user get a list of products filtered by title
router.get('/products/filter/title', async (req, res)=>{
    try{
        const products = await Product.find({title : req.body.title})
        res.json(products)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

//route to user get a list of products filtered by description
router.get('/products/filter/description', async (req, res)=>{
    try{
        const products = await Product.find({description : req.body.description})
        res.json(products)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

//route to user get a list of products filtered by price
router.get('/products/filter/price', async (req, res)=>{
    try{
        const products = await Product.find({price : req.body.price})
        res.json(products)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

//route to user get a list of products filtered by category
router.get('/products/filter/category', async (req, res)=>{
    try{
        const products = await Product.find({category : req.body.category})
        res.json(products)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

//route to user get a list of products filtered by ID
router.get('/products/:id', getProduct, (req, res)=>{
    res.json(res.product)
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
router.patch('/products/:id', getProduct, async (req, res)=>{
    if(req.body.title != null) res.product.title = req.body.title
    if(req.body.description != null) res.product.description = req.body.description
    if(req.body.price != null) res.product.price = req.body.price
    if(req.body.category != null) res.product.category = req.body.category
    
    try{
        const updatePorduct = await res.product.save()
        res.json(updatePorduct)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//route to user delete a product from the base
router.delete('/products/:id', getProduct, async(req, res)=>{
    try{
        await res.product.remove()
        res.json({ message: 'product deleted'})
    }catch (error) {
        res.status(500).json({message: error.message})
    }
})

async function getProduct(req, res, next){
    try{
        product = await Product.findById(req.params.id)
        if (product == null) return res.status(404).json({ message: 'product not found'})
    }catch (error){
        res.status(500).json({ message: error.message })
    }
    res.product = product
    next()
}

module.exports = router