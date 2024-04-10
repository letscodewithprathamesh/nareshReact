import React, { useState } from 'react'

export default function Question(props)
 {

    const {question,options,onNextQuestion,answer,setScore}=props

   {/* const handleOptionSelect = (option) => {
        if (option === answer) {
            // Increment score if the selected option is correct
            SetScore((prevScore) => prevScore + 1);
        } else {
            // Ensure the score doesn't go below zero
            SetScore((prevScore) => Math.max(0, prevScore - 1));
        }
    }; */}

    const handleOptionSelect = (option) => {
        if (option === answer) 
        {
            setScore((prev) => prev + 1);
        }
        
        onNextQuestion();
    };



  return (
    <div>
        <div className="container">
            <div className="header">
                <h1>QUIZ APP</h1>
            </div>
            <div className="question">
              <h1>{question}</h1>
            </div>
            <div className='option'>
                {options.map((option,index)=>(
                   <div key={index}>
                   <button onClick={() => handleOptionSelect(option)}>{option}</button>
                   </div>
                ))}
               

            </div>
           
        </div>
    </div>
  )
}
