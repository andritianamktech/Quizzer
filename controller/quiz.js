const { Quiz } = require('../model/quiz')
const { Worksheet } = require('../model/worksheet')

// Create single quiz controller. {{ route: /quiz }}
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

// Create single worksheet controller. {{ route: /worksheet }}
const createWorksheet = async (req, res) => {
    let user = req.user;
    let { questions } = req.body;

    try {
        const worksheet = new Worksheet({
            userID: user._id,
            questions: questions
        });

        let response = await worksheet.save();

        return res.status(201).json(response);

    } catch (e) {
        return res.status(404).json(e);
    }
}

// Fetch single worksheet controller.
const fetchWorksheet = async (req, res) => {
    const { id } = req.params;

    try {
        const workSheet = Worksheet.findById(id);

        if (!workSheet) {
            return res.status(401).send("worksheet not available");
        }

        return res.status(200).json(workSheet)
    } catch (error) {
        return res.status(404).json;
    }
}