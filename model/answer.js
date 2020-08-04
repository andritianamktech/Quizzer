const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    answers: [String]
})

const Answer = mongoose.model('answer', answerSchema)

module.exports = Answer