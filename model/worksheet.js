const mongoose = require('mongoose')
const {quizSchema} = require('./quiz')
const {answerSchema} = require('./answer')

const worksheetSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    questions: [quizSchema],
    answers: [answerSchema]
}, {timeStamp: true})


const Worksheet = mongoose.model('worksheet', worksheetSchema)

module.exports = {
    Worksheet,
    worksheetSchema
}