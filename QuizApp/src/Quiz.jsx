import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Question from './Question.jsx';

export default function Quiz() {
    const [quizdata, setQuizdata] = useState([]);
    const [currentindex,SetCurrentIndex]=useState(0)
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=10")
            .then((res) => {
                setQuizdata(res.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching quiz data:', error);
            });
    }, []);



    const question = quizdata.length > 0 ? quizdata[currentindex].question : 'null';
    console.log(question);
    const options = quizdata.length > 0 ? [...quizdata[currentindex].incorrect_answers, quizdata[currentindex].correct_answer] : [null];
    const answer = quizdata.length > 0 ?quizdata[currentindex].correct_answer: 'null';



    const handleNextQuestion = () => {
        SetCurrentIndex(currentindex + 1);
    };
   
    if (!quizdata || quizdata.length === 0 || currentindex >= quizdata.length) {
        return <div>Loading...</div>; // or any other loading indicator
    }
   
    if (currentindex >= quizdata.length) {
        return <div>Final Score: {score}</div>;
    }
    return (
        <div>
          

          {question ? (
    <Question question={question} options={options} onNextQuestion={handleNextQuestion} answer={answer} setScore={setScore}/>
) : <div>{score}</div>}

            {currentindex}


        </div>
    );
}