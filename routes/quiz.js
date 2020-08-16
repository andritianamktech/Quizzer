import { createQuiz, createWorksheet, fetchWorksheet } from '../controller/quiz'
 
const router = require('express').Router()
const { Quiz } = require('../model/quiz')
const passport = require('passport')
const { Worksheet } = require('../model/worksheet')

// Create single quiz route.
router.route('/quiz')
    .post(async (req, res) => await createQuiz(req, res));

// Create single worksheet route.
router.route('/worksheet')
    .post(passport.authenticate('jwt'), async (req, res) => await createWorksheet(req, res));

router.route('/worksheet/:id')
    .get(async (req, res) => await fetchWorksheet(req, res));

module.exports = router