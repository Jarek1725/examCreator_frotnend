import React from 'react';
import {Button, Checkbox, FormControlLabel, FormGroup} from "@mui/material";

const AttemptQuestion = (props) => {

    let selectedAnswers = []
    let selectedCheckboxes = []

    const handleCheckboxes = (e) => {
        if (selectedAnswers.includes(e.target.value)) {
            selectedAnswers.splice(selectedAnswers.indexOf(e.target.value), 1)
        } else {
            selectedAnswers.push(e.target.value)
        }
    }

    const handleNextQuestion = () => {
        props.nextQuestion(selectedAnswers, selectedCheckboxes)
    }

    return (
        <div className="exam_attempt_container">
            <div className="exam_attempt_container_main">
                <div className="exam_attempt_category_container">
                    {props.currentQuestion.exam.title}
                </div>
                <div className="exam_question">
                    <div className="exam_question_title">
                        {props.currentQuestion.value}
                    </div>
                </div>
                <FormGroup>
                    {props.currentQuestion.answers.map(answer => (
                        <div className="exam_answers">
                            <FormControlLabel control={<Checkbox/>} className="exam_answer_value"
                                              label={<p>{answer.value}</p>}
                                              style={{fontSize: "22px"}} value={answer.id}
                                              onClick={(e) => handleCheckboxes(e)}
                            />
                        </div>
                    ))}
                </FormGroup>
                <div className="exam_action_buttons">
                    <p>Question {props.questionId + 1} / {props.questionLength}</p>
                    <Button variant="outlined" className="exam_action_button" onClick={() => props.previousQuestion()}>Previous
                        question</Button>
                    <Button variant="contained" className="exam_action_button" onClick={() => handleNextQuestion()}>Next
                        question</Button>
                    <Button variant="outlined" className="exam_action_button" onClick={() => props.nextQuestion()}
                            style={{borderColor: "#f44336", color: "#f44336"}}>End attempt</Button>
                </div>
            </div>
        </div>
    );
};

export default AttemptQuestion;