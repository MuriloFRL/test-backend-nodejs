require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => console.error('error', err))
db.once('open', () => console.log('DB connection established'))

app.use(express.json())

const productsRouter = require('./routes/products')
app.use('products', productsRouter)

app.listen(3000, () => console.log('server running at 3000'))
