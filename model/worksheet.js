const mongoose = require('mongoose')
const Quiz = require('./quiz')

const worksheetSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    questions: [Quiz]
}, {timeStamp: true})


const Worksheet = mongoose.model('worksheet', worksheetSchema)

module.exports = Worksheet