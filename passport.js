const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./model/users')
const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt


passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username, password, cb) => {
    try {
        let user = await User.findOne({username: username})

        if (!user) return cb(null, false, { message: 'Incorrect username' })

        await user.comparePassword(password, (err, isMatch) => {
            if(err) return cb(err)
            if (!isMatch) return cb(null, false, { message: 'Incorrect password' })

            return cb(null, user, { message: 'Login successfull' })
        })

    } catch (error) {
        console.log(error)
        cb(error)
    }
}))

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_TOKEN
}, async (jwtPayload, cb) => {
    try {
        const user = await User.findOne({ _id: jwtPayload.id })
        cb(null, user)
    }
    catch (err) {
        cb(err)
    }
}))