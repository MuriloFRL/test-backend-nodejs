const express = require('express')
const router = express.Router()

//route to user get a list of all products
router.get('/products', (req, res)=>{
    res.send('teste get')
})

//route to user get a list of products filtered by ID
router.get('/products/:id', (req, res)=>{

})

//route to user add a product to the base
router.post('/products', (req, res)=>{

})

//route to user update a product category
router.patch('/products/:id', (req, res)=>{

})

//route to user delete a product from the base
router.delete('/products/:id', (req, res)=>{

})

module.exports = router