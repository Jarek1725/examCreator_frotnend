import React from 'react';
import {Button, Checkbox, FormControlLabel, FormGroup} from "@mui/material";

const AttemptQuestion = (props) => {
    console.log(props.currentQuestion)
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
                            <FormControlLabel control={<Checkbox/>} label={<p>{answer.value}</p>}
                                              style={{fontSize: "22px"}}/>
                        </div>
                    ))}
                </FormGroup>
                <div className="exam_action_buttons">
                    <Button variant="outlined" className="exam_action_button" onClick={()=>props.previousQuestion()}>Previous question</Button>
                    <Button variant="contained" className="exam_action_button" onClick={()=>props.nextQuestion()}>Next question</Button>
                </div>
            </div>
        </div>
    );
};

export default AttemptQuestion;