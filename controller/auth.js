const jwt = require('jsonwebtoken');
const User = require('../model/users')

const login = async (req, res) => {
    let user = req.user;

    try {
        let token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);
        return res.status(200).json({ token: token, username: user.username });
    } catch (e) {
        res.status(404).json(e);
    }
}

const signup = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username: username });

        if (user) {
            return res.status(401).json({ message: "username already exists" })
        }

        const newUser = new User({
            username: username,
            password: password
        });

        const response = await newUser.save();
        const token = jwt.sign({ id: response._id }, process.env.JWT_TOKEN);
        return res.status(201).json({ token, username: response.username });

    } catch (e) {
        return res.status(404).json(e);
    }
}

module.exports = {
    login,
    signup
}