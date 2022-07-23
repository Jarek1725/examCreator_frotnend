import React, {useEffect, useState} from 'react';
import './attemptExamStyle.scss'
import {useLocation, useNavigate} from "react-router-dom";

const AttemptExam = (props) => {
    const[activeQuestion, setActiveQuestion] = useState(0)
    const {state} = useLocation();
    const Navigate = useNavigate();

    useEffect(() => {
        console.log("state")
        if(state === null) {
            Navigate('/');
        }
    }, [])

    if(state === null) return ''

    const {isExamActive} = state;


    if(isExamActive) return (
        <div>
            test
        </div>
    );
};

export default AttemptExam;