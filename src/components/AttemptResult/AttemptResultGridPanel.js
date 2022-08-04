import React from 'react';
import './attemptResultGridPanelStyle.scss'

const AttemptResultGridPanel = (props) => {
    console.log(props.question)

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

    let isCorrect = getCorrectAnswersValue()

    return (
        <div className="attempt_result_grid_panel_container">
            <div className="attempt_result_grid_panel_top_container">
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
            </div>
        </div>
    );
};

export default AttemptResultGridPanel;