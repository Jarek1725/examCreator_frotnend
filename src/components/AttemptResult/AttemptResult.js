import React, {useEffect} from 'react';
import './attemptResultStyle.scss'
import ExamDetailsTopPanel from "../common/examDetailsTopPanel/ExamDetailsTopPanel";
import {useLazyQuery} from "@apollo/client";
import GetAttemptResult from "../graphQl/GetAttemptResult";
import {useNavigate, useParams} from "react-router-dom";
import {CircularProgress, Rating} from "@mui/material";

const AttemptResult = () => {

    useEffect(() => {
        document.querySelector('.navbar_container').style.display = 'grid'
        document.querySelector('.index_container').style.display = 'grid'
        document.querySelector('.search_panel_container').style.display = 'flex'
        document.querySelector('.index_mid_panel').style.width = '100%'
    }, [])

    const {id} = useParams();
    const [getAttemptResult, {
        data: attemptResultData,
        loading: attemptResultLoading
    }] = useLazyQuery(GetAttemptResult())

    const getPercentageScore = () => {
        return (attemptResultData.attemptResult.score / attemptResultData.attemptResult.exam.maxPoints) * 100
    }

    const getPointsToPass = () => {
        return Math.ceil(attemptResultData.attemptResult.exam.maxPoints *
            (attemptResultData.attemptResult.exam.percentToPass / 100))
    }

    const getCorrectAnswersValue = () => {
        let correctAnswersCounter = 0;
        let selectedAnswers = 0;
        let questionCorrectAnswers = 0;
        attemptResultData.attemptResult.attemptQuestion.forEach(e => {
            e.question.answers.forEach(questionAnswer => {
                if (questionAnswer.isCorrect) {
                    questionCorrectAnswers++
                }
            })

            if (e.attemptAnswers.length === questionCorrectAnswers) {
                e.attemptAnswers.forEach(attemptAnswer => {
                    if (e.question.answers.find(o => {
                        return o.id === attemptAnswer.answer.id
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
        })
        return correctAnswersCounter
    }

    const getWrongAnswersValue = () => {
        return attemptResultData.attemptResult.attemptQuestion.length - getCorrectAnswersValue()
    }

    const showRateExam = () => {
        let appUser = document.cookie.match('(^|;)\\s*publicToken\\s*=\\s*([^;]+)')?.pop() || ''
        console.log(appUser)
        return appUser == attemptResultData.attemptResult.user.publicToken
    }

    const navigate = useNavigate();


    useEffect(() => {
        getAttemptResult({
            variables: {
                attemptId: id
            }
        })
    }, [navigate])

    if (attemptResultData) return (
        <div className="attempt_result_container">
            <ExamDetailsTopPanel examTitle={attemptResultData.attemptResult.exam.title}/>
            <div className="attempt_result_divider">
                <div className="attempt_result_main_container"></div>
                <div className="attempt_result_right_container">
                    <div className="attempt_result_right_top_text">Attempt summary</div>
                    {attemptResultData.attemptResult.score >= attemptResultData.attemptResult.exam.maxPoints *
                    (attemptResultData.attemptResult.exam.percentToPass / 100) ?
                        <div className="attempt_result_passed"><p>PASSED</p></div> :
                        <div className="attempt_result_failed"><p>Failed</p></div>}
                    <div className="attempt_result_section">
                        <div className="attempt_result_mini_container">
                            <div
                                className="attempt_container_square_background attempt_container_square_background_points">
                                <p>{attemptResultData.attemptResult.score}</p></div>
                            <div className="attempt_container_square_value">
                                <p>Point{attemptResultData.attemptResult.score > 1 ? 's' : ''}</p></div>
                        </div>
                    </div>
                    <div className="attempt_result_percentage_score">
                        <div className="attempt_result_percentage_progress_container">
                            <CircularProgress variant="determinate" value={getPercentageScore()}
                                              className="browse_tab_main_grid_panel_bottom_data_average_progress"/>
                        </div>
                        <p className="browse_tab_main_grid_panel_bottom_average">
                            {getPercentageScore().toString().substring(0, 3)}% score
                        </p>
                    </div>
                    <div className="attempt_result_section">
                        <div className="attempt_result_mini_container">
                            <div
                                className="attempt_container_square_background attempt_container_square_background_correct_answers">
                                <p>{getCorrectAnswersValue()}</p></div>
                            <div className="attempt_container_square_value"><p>Correct answers</p></div>
                        </div>
                        <div className="attempt_result_mini_container">
                            <div
                                className="attempt_container_square_background attempt_container_square_background_wrong_answers">
                                <p>{getWrongAnswersValue()}</p></div>
                            <div className="attempt_container_square_value"><p>Wrong answers</p></div>
                        </div>
                    </div>
                    <div className="attempt_result_section">
                        <div className="attempt_result_mini_container">
                            <div
                                className="attempt_container_square_background attempt_container_square_background_points_to_pass">
                                <p>{getPointsToPass()}</p></div>
                            <div className="attempt_container_square_value"><p>Points to pass</p></div>
                        </div>
                    </div>
                    <div className="attempt_result_mini_container">
                        {showRateExam() ?
                            <div className="attempt_result_rate_exam_container">
                                <div className="attempt_result_rate_exam"><p>Rate exam</p></div>
                                <Rating name="simple-controlled" className="attempt_result_rate_exam_icon"
                                        style={{color: "#5B59B5"}}/>
                            </div>
                            : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttemptResult;