const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/products", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => console.error('error', err))
db.once('open', () => console.log('DB connection established'))

app.listen(3000, () => console.log('server running at 3000'))