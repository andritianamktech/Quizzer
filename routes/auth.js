const router = require('express').Router()
const passport = require('passport')
const {
    login,
    signup
} = require('../controller/auth')

// Login route
router.route('/login')
    .post(passport.authenticate('local', { session: false }), login);

// Signup route
router.route('/signup')
    .post(signup);

module.exports = router