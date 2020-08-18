const router = require('express').Router()
const passport = require('passport')
const {
    createWorksheet,
    fetchWorksheet
} = require('../controller/workheet')

router.route('/')
    .post(passport.authenticate('jwt'), createWorksheet)

router.route('/:id')
    .get(fetchWorksheet)

module.exports = router