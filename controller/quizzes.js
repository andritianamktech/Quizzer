const Quiz = require('../model/quiz')
const Worksheet = require('../model/worksheet')

/*
* All Logic for Quiz creation and answers
* */

const createAQuiz = async (req, res) => {
    let {question, options, answer} = req.body
    try {
        const quiz = new Quiz({
            question: question,
            options: options,
            answer: answer
        })
        let response = await quiz.save()

        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json(e)
    }

}

const createAWorksheet = (req, res) => {

}

module.exports = {
    createAQuiz
}