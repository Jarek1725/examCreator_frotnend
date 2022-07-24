import React, {useState} from 'react';
import './startExam.scss'
import ExamDetailsTopPanel from "../../common/examDetailsTopPanel/ExamDetailsTopPanel";
import {useQuery} from "@apollo/client";
import {useNavigate, useParams} from "react-router-dom";
import GetExamDetails from "../../graphQl/GetExamDetails";
import LoadingPanel from "../../common/loadingPanel/LoadingPanel";
import {Button} from "@mui/material";

const StartExam = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const[isExamActive, setExamActive] = useState(true)


    const handleStartExam = () => {
        navigate(`/exams/${id}/attempt`, {state: {isExamActive: isExamActive}})
    }

    const {
        error: getExamError,
        data: getExamData,
        loading: getExamLoading,
        refetch: getExamsRefetch
    } = useQuery(GetExamDetails(), {
        variables: {
            examPublicId: id
        }
    })

    if (getExamLoading) return <LoadingPanel/>

    if (getExamData)
        return (
            <div className="start_exam_container">
                <div>
                    <ExamDetailsTopPanel examTitle={getExamData.exam.title}/>
                    <div className="start_exam_bottom_container">
                        <div className="start_exam_category_container">
                            <p>Categories</p>
                            <div className="start_exam_categories_background"
                                 title={getExamData.exam.categories.map((category, index) => (
                                     index === 0 ? category.value :
                                         ` ${category.value}`
                                 ))}
                            >
                                {getExamData.exam.categories.map((category, index) => (
                                        index === 0 ? <p>{category.value}</p> :
                                            <p>{`, ${category.value}`}</p>
                                    )
                                )}
                            </div>
                            <div className="rules_container">
                                <p>Rules</p>
                                <p className="exam_rule">Exam has {getExamData.exam.questions.length} active questions.</p>
                                <p className="exam_rule">Please make sure you select the appropriate answer.</p>
                                <p className="exam_rule">After confirming your answer, you will not be able to go back
                                    to
                                    the
                                    previous question.</p>
                                <p className="exam_rule">Some questions may have more than one correct answer, questions
                                    may
                                    also be variously scored.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="start_exam_right_panel_container">
                    <div className="start_exam_right_panel_your_last_exams">
                        <div className="start_exam_right_panel_your_attempts_container">
                            <h2>Last attempts</h2>
                        </div>
                        <div className="start_exam_button">
                            <Button variant="contained" style={{padding:"5px 50px"}} onClick={()=>handleStartExam()}>START EXAM</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default StartExam;