const router = require('express').Router()

router.route('/')

router.route('/quiz')
    /*
    * create a single quiz
    * params:
    * single question: String
    * options: array of strings not more than 4
    * answer: index of correct answer
    * */
    .post()

router.route('/worksheet')
    /*
    * Creates a single worksheet
    * Worksheet is a collection of quizzes
    * */
    .post()

module.exports = router