import { userLogin, userSignUp } from '../controller/auth';

const router = require('express').Router()
const passport = require('passport')

// Login route
router.route('/login')
    .post(passport.authenticate('local',{session: false}), async (req, res) => await userLogin(req, res));

// Signup route
router.route('/signup')
    .post(async (req, res) => await userSignUp(req, res));

module.exports = router