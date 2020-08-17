const authController = require('../controller/auth');
const router = require('express').Router()
const passport = require('passport')

// Login route
router.route('/login')
    .post(passport.authenticate('local',{session: false}), async (req, res) => await authController.userLogin(req, res));

// Signup route
router.route('/signup')
    .post(async (req, res) => await authController.userSignUp(req, res));

module.exports = router