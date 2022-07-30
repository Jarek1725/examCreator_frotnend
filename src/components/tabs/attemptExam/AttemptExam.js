import React, {useEffect, useState} from 'react';
import './attemptExamStyle.scss'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useMutation} from "@apollo/client";
import StartAttempt from "../../graphQl/StartAttempt";
import AttemptQuestion from "./AttemptQuestion";

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
        }

    }, [])

    const [startAttempt, {data: attemptData, loading: attemptLoading}] = useMutation(StartAttempt(), {
        variables: {
            examPublicId: id,
            appUserPrivateToken: document.cookie.match('(^|;)\\s*privateToken\\s*=\\s*([^;]+)')?.pop() || ''
        }
    })


    const [currentQuestionId, setCurrentQuestionId] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([])

    const nextQuestion = (selectedValues, selectedCheckboxesForm) => {
        setUserAnswers((prevValues) => {
            return [...prevValues, {
                questionId: attemptData.startAttempt[currentQuestionId].id,
                selectedAnswersId: selectedValues
            }]
        })

        setSelectedCheckboxes((prevValues) => {
            return [...prevValues, [selectedCheckboxesForm]]
        })

        setCurrentQuestionId(currentQuestionId + 1)
        console.log(userAnswers)
    }

    const previousQuestion = () => {
        setCurrentQuestionId(currentQuestionId - 1)
        userAnswers.pop()
    }

    if (state === null) return 'Null'

    const {isExamActive} = state;

    if (isExamActive && attemptData) return (
        <AttemptQuestion nextQuestion={(e) => nextQuestion(e)} previousQuestion={previousQuestion}
                         currentQuestion={attemptData.startAttempt[currentQuestionId]}
                         questionId={currentQuestionId} questionLength={attemptData.startAttempt.length}
        />
    );
};

export default AttemptExam;