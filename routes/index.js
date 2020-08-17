const router = require('express').Router()
const authRoute = require('./auth')
const quizRoute = require('./quiz')

router.use('/auth', authRoute)
router.use('/quizzes', quizRoute)

module.exports = router