const express = require('express')


const app = express()

app.get('/', (req,res) => {
    return res.send('Server')
})

app.listen(process.env.PORT || 5000,() => {
    console.log(`Server started on port ${process.env.PORT || 5000}`)
})