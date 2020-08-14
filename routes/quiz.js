const router = require('express').Router()
const { Quiz } = require('../model/quiz')
const passport = require('passport')
const { Worksheet } = require('../model/worksheet')

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
    .post(async (req, res) => {
        let { question, options, answer } = req.body

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
    })

router.route('/worksheet')
    /*
    * Creates a single worksheet
    * Worksheet is a collection of quizzes
    * */
    .post(passport.authenticate('jwt'), async (req, res) => {
        let user = req.user
        let { questions } = req.body

        try {
            const worksheet = new Worksheet({
                userID: user._id,
                questions: questions
            })

            let response = await worksheet.save()

            return res.status(201).json(response)

        } catch (error) {
            return res.status(404).send(error)
        }
    })

router.route('/worksheet/:id')
    .get(async (req, res) => {
        let { id } = req.params

        try {
            let workSheet = Worksheet.findById(id)

            if (!workSheet) {
                return res.status(401).send("worksheet not available")
            }

            return res.status(200).json(workSheet)
        } catch (error) {
            return res.status(404).json
        }
    })

module.exports = router