import React, {useEffect, useState} from 'react';
import './attemptExamStyle.scss'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useMutation} from "@apollo/client";
import StartAttempt from "../../graphQl/StartAttempt";
import AttemptQuestion from "./AttemptQuestion";
import EndAttempt from "../../graphQl/EndAttempt";

const AttemptExam = (props) => {
        const [activeQuestion, setActiveQuestion] = useState(0)
        const {state} = useLocation();
        const Navigate = useNavigate();
        const {id} = useParams();

        useEffect(() => {
            if (state === null) {
                Navigate(`/exams/${id}`);
            } else {
                startAttempt()
                document.querySelector('.navbar_container').style.display = 'none'
                document.querySelector('.index_container').style.display = 'flex'
                document.querySelector('.search_panel_container').style.display = 'none'
                document.querySelector('.index_mid_panel').style.width = '100%'
            }

        }, [])

        const [startAttempt, {data: attemptData, loading: attemptLoading}] = useMutation(StartAttempt(), {
            variables: {
                examPublicId: id,
                appUserPrivateToken: document.cookie.match('(^|;)\\s*privateToken\\s*=\\s*([^;]+)')?.pop() || ''
            }
        })

        const [endAttempt, {data: endAttemptData, loading: endAttemptLoading}] = useMutation(EndAttempt())

        console.log(attemptData)


        const [currentQuestionId, setCurrentQuestionId] = useState(0)
        const [userAnswers, setUserAnswers] = useState([])
        const [selectedCheckboxes, setSelectedCheckboxes] = useState([])

        useEffect(() => {
            if (attemptData) {
                attemptData.startAttempt.questions[currentQuestionId].answers.forEach(e => {
                    setSelectedCheckboxes((prevValues) => {
                        return [...prevValues, {
                            answerId: e.id,
                            checked: false
                        }]
                    })
                })

                attemptData.startAttempt.questions.forEach(question => {
                    setUserAnswers((prevValues) => {
                        return [...prevValues, {
                            questionId: question.id,
                            selectedAnswersId: []
                        }]
                    })
                })

            }
        }, [attemptLoading])


        const [back, setBack] = useState(false)

        const nextQuestion = (selectedValues) => {
            let saveData = userAnswers
            saveData[currentQuestionId].selectedAnswersId = selectedValues
            setUserAnswers(saveData)
            if (userAnswers.length !== currentQuestionId + 1) {
                setSelectedCheckboxes([])

                setSelectedCheckboxes([])
                userAnswers[currentQuestionId + 1].selectedAnswersId.forEach(answer => {
                    setSelectedCheckboxes((prevValues) => {
                        return [...prevValues, {
                            answerId: answer,
                            checked: true
                        }]
                    })
                })

                attemptData.startAttempt.questions[currentQuestionId + 1].answers.forEach(e => {
                    if (!userAnswers[currentQuestionId + 1].selectedAnswersId.includes(e.id)) {
                        setSelectedCheckboxes((prevValues) => {
                            return [...prevValues, {
                                answerId: e.id,
                                checked: false
                            }]
                        })
                    }
                })

            } else {
                Navigate(`/attempt/${attemptData.startAttempt.attemptId}`)
                endAttempt({
                    variables: {
                        selectedAnswers:userAnswers,
                        attemptId:attemptData.startAttempt.attemptId,
                        appUserPrivateToken: document.cookie.match('(^|;)\\s*privateToken\\s*=\\s*([^;]+)')?.pop() || ''
                    }
                })
            }
            setCurrentQuestionId(currentQuestionId + 1)

        }


        const previousQuestion = () => {
            setBack(true)

            setSelectedCheckboxes([])

            userAnswers[currentQuestionId - 1].selectedAnswersId.forEach(answer => {
                setSelectedCheckboxes((prevValues) => {
                    return [...prevValues, {
                        answerId: answer,
                        checked: true
                    }]
                })
            })

            attemptData.startAttempt.questions[currentQuestionId - 1].answers.forEach(e => {
                if (!userAnswers[currentQuestionId - 1].selectedAnswersId.includes(e.id)) {
                    setSelectedCheckboxes((prevValues) => {
                        return [...prevValues, {
                            answerId: e.id,
                            checked: false
                        }]
                    })
                }
            })

            setCurrentQuestionId(currentQuestionId - 1)
        }

        if (state === null) return 'Null'

        const {isExamActive} = state;


        if (isExamActive && attemptData && currentQuestionId != attemptData.startAttempt.questions.length) return (
            <AttemptQuestion nextQuestion={(e) => nextQuestion(e)} previousQuestion={previousQuestion}
                             currentQuestion={attemptData.startAttempt.questions[currentQuestionId]}
                             questionId={currentQuestionId} questionLength={attemptData.startAttempt.questions.length}
                             selectedCheckboxes={selectedCheckboxes} setSelectedCheckboxes={(e) => setSelectedCheckboxes(e)}
                             useranswers={userAnswers}
            />
        );
    }
;

export default AttemptExam;