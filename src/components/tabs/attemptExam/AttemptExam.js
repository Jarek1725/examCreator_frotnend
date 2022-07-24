import React, {useEffect, useState} from 'react';
import './attemptExamStyle.scss'
import {useLocation, useNavigate} from "react-router-dom";

const AttemptExam = (props) => {
    const[activeQuestion, setActiveQuestion] = useState(0)
    const {state} = useLocation();
    const Navigate = useNavigate();

    useEffect(() => {
        if(state === null) {
            Navigate('/');
        } else{
            document.querySelector('.navbar_container').style.display = 'none'
            document.querySelector('.index_container').style.display = 'flex'
            document.querySelector('.search_panel_container').style.display = 'none'
        }
    }, [])

    if(state === null) return ''

    const {isExamActive} = state;

    if(isExamActive) return (
        <div className="exam_attempt_container">
            Podstawy programowania
        </div>
    );
};

export default AttemptExam;