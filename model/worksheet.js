const mongoose = require('mongoose')
const Quiz = require('./quiz')
const Answer = require('./answer')

const worksheetSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    questions: [Quiz],
    answers: [Answer]
}, {timeStamp: true})


const Worksheet = mongoose.model('worksheet', worksheetSchema)

module.exports = Worksheet