import React from 'react';
import {gql, useQuery} from "@apollo/client";

const GET_EXAMS = (gql`
    query Exams($category:String, $school:String, $sortBy:String){
        exams(filter:{category:$category, school:$school}, sortBy:$sortBy){
            id
            title
            createDate
            averageScore
            publicId
            colorValue
            averageExamRating
            examRatings{
                id
                appUser{
                    id
                }
            }
            questions {
                isHidden
            }
            categories{
                value
            }
            attempts{
                score
            }
        }
    }
`)

const GetAttemptResult = (category, school, sortBy) => {
    let {data, error, loading} = useQuery(GET_EXAMS, {
        variables: {
            category,
            school,
            sortBy
        }
    })

    return (gql`
        query GetAttemptResult($attemptId:Int){
            attemptResult(attemptId:$attemptId){
                id
                exam{
                    percentToPass
                    maxPoints
                    title
                }
                score
                attemptQuestion{
                    question{
                        value
                        id
                        answers{
                            id
                            value
                            isCorrect
                        }
                    }
                    attemptAnswers{
                        answer{
                            id
                            isCorrect
                        }
                    }
                }
            }
        }
    `)
};

export default GetAttemptResult;