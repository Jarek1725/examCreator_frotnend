import React from 'react';
import {gql, useQuery} from "@apollo/client";

const GET_EXAM_ATTEMPTS = gql`
    query GetAttempts($examId:Int, $publicToken:String){
        examAttempts(filter:{examId:$examId, publicToken:$publicToken}){
            createDate
            score
            id
            exam{
                maxPoints
                title
                percentToPass
                categories{
                    value
                }
            }
        }
    }
`

const GetUserLastExams = (examId, publicToken) => {
    let {data, error, loading} = useQuery(GET_EXAM_ATTEMPTS, {
        variables:{
            examId,
            publicToken
        }
    })

    return {data, error, loading}
};

export default GetUserLastExams;