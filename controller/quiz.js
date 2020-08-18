const { Quiz } = require('../model/quiz')

const createQuiz = async (req, res) => {
    const { question, options, answer } = req.body;

    try {
        const quiz = new Quiz({
            question,
            options,
            answer,
        });

        let response = await quiz.save();
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json(e);
    }
}



module.exports = {
    createQuiz
}