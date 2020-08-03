const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [{
        option: {
            type: String
        },
        name: {
            type: String,
            enum: ['a','b','c','d']
        }
    }],
    answer: {
        type: String,
        enum: ['a','b','c','d']
    }
})

const Quiz = mongoose.model('quiz', quizSchema)

module.exports = Quiz