import React, {useEffect, useState} from 'react';
import './attemptResultGridPanelStyle.scss'
import {Checkbox, FormControlLabel} from "@mui/material";

const AttemptResultGridPanel = (props) => {
    console.log(props.question)
    const [listOfSelectedAndCorrectAnswers, setListOfSelectedAndCorrectAnswers] = useState([])

    const getQuestionScore = () => {

    }

    const getCorrectAnswersValue = () => {
        let correctAnswersCounter = 0;
        let selectedAnswers = 0;
        let questionCorrectAnswers = 0;
        props.question.question.answers.forEach(questionAnswer => {
            if (questionAnswer.isCorrect) {
                questionCorrectAnswers++
            }
        })

        if (props.question.attemptAnswers.length === questionCorrectAnswers) {
            props.question.attemptAnswers.forEach(attemptAnswer => {
                if (props.question.question.answers.find(o => {
                    return o.id === attemptAnswer.answer.id && o.isCorrect === true
                })) {
                    selectedAnswers++
                }
            })
            if (selectedAnswers === questionCorrectAnswers) {
                correctAnswersCounter++
            }
        }
        selectedAnswers = 0
        questionCorrectAnswers = 0;
        return correctAnswersCounter
    }


    const setElementMaxHeight = (id, isEnter) => {
        let element = document.getElementById(id)
        let element1 = document.getElementById(`attempt_result_grid_panel_top_container_${id}`)
        let element2 = document.getElementById(`attempt_result_answers_container_${props.questionIndex}`)
        if (isEnter) {
            element.style.maxHeight = `${(props.question.question.answers.length * 55 + props.question.question.value.length / 80 * 22 + 60) * 1.1}px`
            element1.style.maxHeight = `${(props.question.question.answers.length * 55 + props.question.question.value.length / 80 * 22 + 60) * 1.1}px`
            element2.style.maxHeight = `${(props.question.question.answers.length * 55) * 1.1}px`
        } else {
            element.style.maxHeight = '80px'
            element1.style.maxHeight = '80px'
            element2.style.maxHeight = '0px'
        }
    }

    let isCorrect = getCorrectAnswersValue()


    const getListOfSelectedAndCorrectAnswers = () => {

        console.log(props.question.question)
        console.log(props.question.attemptAnswers)
        props.question.question.answers.forEach(answer => {

            if (props.question.attemptAnswers.length > 0) {

                let isSelected = props.question.attemptAnswers.filter(o => {
                    return o.answer.id == answer.id
                })

                if(isSelected.length>0){
                    setListOfSelectedAndCorrectAnswers((prevValues) => {
                        return [...prevValues, {
                            isSelected: true,
                            isCorrect: answer.isCorrect,
                            value: answer.value,
                            maxPoints: answer.maxPoints
                        }]
                    })
                }else{
                    setListOfSelectedAndCorrectAnswers((prevValues) => {
                        return [...prevValues, {
                            isSelected: false,
                            isCorrect: answer.isCorrect,
                            value: answer.value,
                            maxPoints: answer.maxPoints
                        }]
                    })
                }

                // if (props.question.attemptAnswers.length > 0) {
                //     props.question.attemptAnswers.forEach(selectedAnswer => {
                //         let isSelected = false
                //
                //         if (selectedAnswer.answer.id === answer.id) {
                //             setListOfSelectedAndCorrectAnswers((prevValues) => {
                //                 return [...prevValues, {
                //                     isSelected: true,
                //                     isCorrect: answer.isCorrect,
                //                     value: answer.value,
                //                     maxPoints: answer.maxPoints
                //                 }]
                //             })
                //             isSelected = true
                //         } else {
                //             if (!answer.isCorrect) {
                //                 setListOfSelectedAndCorrectAnswers((prevValues) => {
                //                     return [...prevValues, {
                //                         answer: answer,
                //                         selectedAnswer: selectedAnswer.answer,
                //                         isSelected: false,
                //                         isCorrect: answer.isCorrect,
                //                         value: answer.value,
                //                         maxPoints: answer.maxPoints
                //                     }]
                //                 })
                //             }
                //         }

                // setListOfSelectedAndCorrectAnswers((prevValues) => {
                //     return [...prevValues, {
                //         isSelected: isSelected,
                //         isCorrect: answer.isCorrect,
                //         value: answer.value,
                //         maxPoints: answer.maxPoints
                //     }]
                // })
                // )
            } else {
                setListOfSelectedAndCorrectAnswers((prevValues) => {
                    return [...prevValues, {
                        isSelected: false,
                        isCorrect: answer.isCorrect,
                        value: answer.value,
                        maxPoints: answer.maxPoints
                    }]
                })
            }
        })
    }

    useEffect(() => {
        getListOfSelectedAndCorrectAnswers()
    }, [])

    return (
        <div className="attempt_result_grid_panel_container" id={props.questionIndex}
             onClick={() => console.log(listOfSelectedAndCorrectAnswers)}
             onMouseEnter={(e) => setElementMaxHeight(props.questionIndex, true)}
             onMouseLeave={(e) => setElementMaxHeight(props.questionIndex, false)}
        >
            <div className="attempt_result_grid_panel_top_container"
                 id={`attempt_result_grid_panel_top_container_${props.questionIndex}`}>
                <div className="attempt_result_grid_panel_text_container attempt_result_grid_panel_id_container">
                    {isCorrect ?
                        <p className="attempt_result_grid_panel_text attempt_result_grid_panel_id_text attempt_result_grid_panel_id_text_passed">{props.questionIndex + 1}</p>
                        :
                        <p className="attempt_result_grid_panel_text attempt_result_grid_panel_id_text attempt_result_grid_panel_id_text_failed">{props.questionIndex + 1}</p>
                    }
                </div>
                <div
                    className="attempt_result_grid_panel_text_container attempt_result_grid_panel_quastion_value_container">
                    <p className="attempt_result_grid_panel_text">{props.question.question.value}</p>
                </div>
                <div
                    className="attempt_result_grid_panel_text_container attempt_result_grid_panel_quastion_value_container">
                    <p className="attempt_result_grid_panel_text attempt_result_grid_panel_id_text">{props.question.question.points} points</p>
                </div>
                <div className="attempt_result_answers_container"
                     id={`attempt_result_answers_container_${props.questionIndex}`}>
                    {listOfSelectedAndCorrectAnswers.map(answer => (
                        <div className="attempt_result_answer_container">
                            <div className="attempt_result_selected_value">
                                <FormControlLabel control={<Checkbox/>} className="exam_answer_value"
                                    // label={<p>{answer.isSelected == true ? '1' : '0'}</p>}
                                                  style={{fontSize: "22px"}}
                                                  checked={answer.isSelected}
                                                  disabled
                                />
                            </div>
                            {answer.isCorrect ? <p className="attempt_result_correct_answer">{answer.value}</p> :
                                <p>{answer.value}</p>}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AttemptResultGridPanel;