import React, {useEffect, useState} from 'react';
import './attemptExamStyle.scss'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useLazyQuery, useMutation} from "@apollo/client";
import StartAttempt from "../../graphQl/StartAttempt";
import AttemptQuestion from "./AttemptQuestion";

const AttemptExam = (props) => {
    const[activeQuestion, setActiveQuestion] = useState(0)
    const {state} = useLocation();
    const Navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if(state === null) {
            Navigate(`/exams/${id}`);
        } else{
            startAttempt()
            document.querySelector('.navbar_container').style.display = 'none'
            document.querySelector('.index_container').style.display = 'flex'
            document.querySelector('.search_panel_container').style.display = 'none'
        }

    }, [])

    const[startAttempt, {data:attemptData, loading:attemptLoading}] = useMutation(StartAttempt(), {
        variables:{
            examPublicId:id,
            appUserPrivateToken:document.cookie.match('(^|;)\\s*privateToken\\s*=\\s*([^;]+)')?.pop() || ''
        }
    })


    const[currentQuestionId, setCurrentQuestionId] = useState(0)
    const[userAnswers, userUserAnswers] = useState([])

    const nextQuestion = () =>{
        setCurrentQuestionId(currentQuestionId+1)
    }

    const previousQuestion = () =>{
        setCurrentQuestionId(currentQuestionId-1)
    }


    if(state === null) return 'Null'

    const {isExamActive} = state;

    if(isExamActive && attemptData) return (
            <AttemptQuestion nextQuestion={nextQuestion} previousQuestion={previousQuestion} currentQuestion={attemptData.startAttempt[currentQuestionId]}/>
    );
};

export default AttemptExam;