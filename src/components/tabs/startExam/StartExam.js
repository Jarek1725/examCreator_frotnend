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
            <>
                <ExamDetailsTopPanel/>
                <div className="start_exam_container">
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
                    </div>
                </div>
            </>
        );
};

export default StartExam;