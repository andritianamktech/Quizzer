const quizController = require('../controller/quiz');
const router = require('express').Router();
const passport = require('passport');

// Create single quiz route.
router.route('/quiz')
    .post(async (req, res) => await quizController.createQuiz(req, res));

// Create single worksheet route.
router.route('/worksheet')
    .post(passport.authenticate('jwt'), async (req, res) => await quizController.createWorksheet(req, res));

router.route('/worksheet/:id')
    .get(async (req, res) => await quizController.fetchWorksheet(req, res));

module.exports = router;