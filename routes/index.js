const router = require('express').Router()
const authRoute = require('./auth')
const quizRoute = require('./quiz')
const worksheetRoute = require('./worksheet')

router.use('/auth', authRoute)
router.use('/quizzes', quizRoute)
router.use('/worksheet', worksheetRoute)

module.exports = router