require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/products')

mongoose.connect(process.env.DATABASE_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => console.error('error', err))
db.once('open', () => console.log('DB connection established'))

app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log('server running at 3000'))
