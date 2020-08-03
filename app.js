const express = require('express')
const path = require('path')
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(express.raw())

app.use(express.static(path.join(__dirname, 'client', 'build')))


// client handling
app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'client','build','index.html'))
})

module.exports = app
