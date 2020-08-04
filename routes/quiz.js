const router = require('express').Router()
const Quiz = require('../model/quiz')

router.route('/')

router.route('/quiz')
    /*
    * create a single quiz
    * params:
    * single question: String
    * options: array of strings not more than 4
    * answer: index of correct answer
    * @path: /api/quizzes/quiz
    * */
    .post(async (req,res) => {
        let {question, options, answer} = req.body

        try{
            const quiz = new Quiz({
                question: question,
                options: options,
                answer: answer
            })
            let response = await quiz.save()

            return res.status(200).json(response)

        }catch (e) {
            return res.status(404).json(e)
        }
    })

router.route('/worksheet')
    /*
    * Creates a single worksheet
    * Worksheet is a collection of quizzes
    * */
    .post()

module.exports = router