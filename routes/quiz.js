const router = require('express').Router();
const {
    createQuiz,
} = require('../controller/quiz')

// Create single quiz route.
router.route('/quiz')
    .post(createQuiz);


module.exports = router;