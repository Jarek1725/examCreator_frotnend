import React, {useEffect} from 'react';
import './attemptResultStyle.scss'
import ExamDetailsTopPanel from "../common/examDetailsTopPanel/ExamDetailsTopPanel";
import {useLazyQuery} from "@apollo/client";
import getAllExams from "../graphQl/getAllExams";
import GetAttemptResult from "../graphQl/GetAttemptResult";
import {useParams} from "react-router-dom";

const AttemptResult = () => {

    useEffect(() => {
        document.querySelector('.navbar_container').style.display = 'grid'
        document.querySelector('.index_container').style.display = 'grid'
        document.querySelector('.search_panel_container').style.display = 'flex'
        document.querySelector('.index_mid_panel').style.width = '100%'
    }, [])

    const {id} = useParams();
    const [getAttemptResult, {data: attemptResultData, loading: attemptResultLoading}] = useLazyQuery(GetAttemptResult())

    useEffect(()=>{
        getAttemptResult({
            variables:{
                attemptId:id
            }
        })
    }, [])

    if(attemptResultData) return (
        <div className="attempt_result_container">
            <ExamDetailsTopPanel examTitle={attemptResultData.attemptResult.exam.title}/>
        </div>
    );
};

export default AttemptResult;