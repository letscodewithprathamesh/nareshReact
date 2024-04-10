import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Quiz() {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetchQuizData();
    }, []);

    const fetchQuizData = async () => {
        try {
            const response = await axios.get("https://opentdb.com/api.php?amount=10&category=21");
            setQuizData(response.data.results);
        } catch (error) {
            console.error('Error fetching quiz data:', error);
        }
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextButtonClick = () => {
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedOption === currentQuestion.correct_answer) {
            setScore(score + 1);
        }
        setSelectedOption('');
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const renderOptions = (question) => {
        const options = [...question.incorrect_answers, question.correct_answer];
        return options.map((option, index) => (
            <div key={index}>
                <input
                    type="radio"
                    id={option}
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                />
                <label htmlFor={option}>{option}</label>
            </div>
        ));
    };

    const renderQuestion = () => {
        const question = quizData[currentQuestionIndex];
        return (
            <div className="question">
                <h2>{question.question}</h2>
                <form>
                    {renderOptions(question)}
                </form>
                <button onClick={handleNextButtonClick}>Next</button>
            </div>
        );
    };

    const renderEndScreen = () => {
        return (
            <div className="end-screen">
                <h2>Quiz completed!</h2>
                <p>Your score: {score}</p>
            </div>
        );
    };

    return (
        <div>
            {currentQuestionIndex < quizData.length ? renderQuestion() : renderEndScreen()}
        </div>
    );
}
