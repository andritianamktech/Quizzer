const router = require('express').Router();
const passport = require('passport');
const {
    createQuiz,
    createWorksheet,
    fetchWorksheet
} = require('../controller/quiz')

// Create single quiz route.
router.route('/quiz')
    .post(createQuiz);

// Create single worksheet route.
router.route('/worksheet')
    .post(passport.authenticate('jwt'), createWorksheet);

router.route('/worksheet/:id')
    .get(fetchWorksheet);

module.exports = router;