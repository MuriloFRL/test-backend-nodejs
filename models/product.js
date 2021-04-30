const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Produdct', productSchema)