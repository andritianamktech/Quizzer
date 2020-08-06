const express = require('express')
const path = require('path')
require('dotenv').config()
const passport = require('passport')
require('./passport')

const app = express()
app.use(express.json())
app.use(express.raw())
app.use(passport.initialize())

app.use(express.static(path.join(__dirname, 'client', 'build')))

// routes
const router = require('./routes')
app.use('/api', router)

// client handling
app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'client','build','index.html'))
})

module.exports = app
