import React, {useEffect, useState} from 'react';
import {Button, Checkbox, FormControlLabel, FormGroup} from "@mui/material";

const AttemptQuestion = (props) => {

    const [selectedAnswers, setSelectedAnswers] = useState([])

    const handleCheckboxes = (e) => {
        let obj = null
        if (selectedAnswers.includes(e.target.value)) {
            setSelectedAnswers(selectedAnswers.filter(i => i !== e.target.value))
            // selectedAnswers.splice(selectedAnswers.indexOf(e.target.value), 1)
            obj = props.selectedCheckboxes.filter(o => {
                return o.answerId === e.target.value
            })[0]
            if (obj !== undefined) {
                obj.checked = false
            }
        } else {
            setSelectedAnswers((prevValues) => {
                return [...prevValues, e.target.value]
            })
            // selectedAnswers.push(e.t arget.value)
            obj = props.selectedCheckboxes.filter(o => {
                return o.answerId === e.target.value
            })[0]
            if (obj !== undefined) {
                obj.checked = true
            }
        }
    }

    useEffect(() => {
        setSelectedAnswers([])
        props.selectedCheckboxes.forEach(e => {
            if (e.checked) {
                setSelectedAnswers((prevValues) => {
                    return [...prevValues, e.answerId]
                })
            }
        })
    }, [props.currentQuestion])


    const handleNextQuestion = () => {
        selectedAnswers.forEach((e, index) => {
            if (e == undefined) {
                let saveData = selectedAnswers
                saveData.splice(index, 1)
                setSelectedAnswers(saveData)
            }
        })
        props.nextQuestion(selectedAnswers)
        setSelectedAnswers([])
    }

    if (props.selectedCheckboxes.length > 0)
        return (
            <div className="exam_attempt_container" key={props.questionId}>
                <div className="exam_attempt_container_main">
                    <div className="exam_attempt_category_container">
                        <p>{props.currentQuestion.exam.title}</p>
                        <p>{props.currentQuestion.points} {props.currentQuestion.points == 1 ? "point" : "points"} </p>
                    </div>
                    <div className="question_answers_container">
                        <div className="exam_question">
                            <div className="exam_question_title">
                                {props.currentQuestion.value}
                            </div>
                        </div>
                        <FormGroup>
                            <div className="exam_answers_container">
                                {props.currentQuestion.answers.map(answer => (
                                    <div className="exam_answers">
                                        <FormControlLabel control={<Checkbox/>} className="exam_answer_value"
                                                          label={<p>{answer.value}</p>}
                                                          style={{fontSize: "22px"}} value={answer.id}
                                                          onClick={(e) => handleCheckboxes(e)}
                                                          checked={props.selectedCheckboxes.filter(o => {
                                                              return o.answerId === answer.id
                                                          })[0].checked === true}

                                        />
                                    </div>
                                ))}
                            </div>
                        </FormGroup>
                        <div className="exam_action_buttons">
                            <p>Question {props.questionId + 1} / {props.questionLength}</p>
                            <Button variant="outlined" className="exam_action_button"
                                    onClick={() => props.previousQuestion()}>Previous
                                question</Button>
                            <Button variant="contained" className="exam_action_button"
                                    onClick={() => handleNextQuestion()}>Next
                                question</Button>
                            <Button variant="outlined" className="exam_action_button"
                                    onClick={() => console.log(props.useranswers)}
                                    style={{borderColor: "#f44336", color: "#f44336"}}>End attempt</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default AttemptQuestion;