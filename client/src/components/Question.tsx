import React, { useState } from "react";
interface Text{
    text: string;
}
function Question_form() {
    const [question, setQuestion] = useState(
        [{
            QuestionText: "welcome to india!",
            questionType: "radio",
            option: [
                { optionText: "Banglore" },
            ],
            open: true,
            required: false
        }]
    );
    return (
        <>
        <div className="question-container">
            <input type="text" value="hello"/>
        <select>
            <option value="checkbox">checkbox</option>
            <option value="radio" >Multiple Choice</option>
        </select>
        </div>
        <div className="question">
            <input type="checkbox"
            value={question.option.checked}
            />
            
            
        </div>
        </>
    );
}

export default Question_form;
