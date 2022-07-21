import React from 'react';
import './startExam.scss'
import ExamDetailsTopPanel from "../../common/examDetailsTopPanel/ExamDetailsTopPanel";
import {useQuery} from "@apollo/client";
import getAllExams from "../../graphQl/getAllExams";
import {useParams} from "react-router-dom";
import GetExamDetails from "../../graphQl/GetExamDetails";
import LoadingPanel from "../../common/loadingPanel/LoadingPanel";

const StartExam = () => {

    const {id} = useParams();

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
                <ExamDetailsTopPanel/>
                <div className="start_exam_bottom_container">
                    <div className="start_exam_category_container">
                        <p>Categories</p>
                        <div className="start_exam_categories_background"
                             title={getExamData.exam.categories.map((category, index) => (
                                 index == 0 ? category.value :
                                     ` ${category.value}`
                             ))}
                        >
                            {getExamData.exam.categories.map((category, index) => (
                                    index == 0 ? <p>{category.value}</p> :
                                        <p>{`, ${category.value}`}</p>
                                )
                            )}
                        </div>
                        <div className="rules_container">
                            <p>Rules</p>
                            <p className="exam_rule">Exam has 32 active questions.</p>
                            <p className="exam_rule">Please make sure you select the appropriate answer.</p>
                            <p className="exam_rule">After confirming your answer, you will not be able to go back to
                                the
                                previous question.</p>
                            <p className="exam_rule">Some questions may have more than one correct answer, questions may
                                also be variously scored.</p>
                        </div>
                    </div>
                    <div className="start_exam_right_panel_container">
                        <div className="start_exam_right_panel_your_last_exams">

                        </div>
                    </div>

                </div>
            </div>
        );
};

export default StartExam;