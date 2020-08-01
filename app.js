const express = require('express')


const app = express()

app.get('/', (req,res) => {
    return res.send('Server')
})

module.exports = app