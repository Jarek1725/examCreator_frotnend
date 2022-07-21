import React from 'react';
import {gql} from "@apollo/client";

const GetExamDetails = () => {
    return (gql`
            query Exam($examPublicId:String){
                exam(examPublicId:$examPublicId){
                    title
                    categories{
                        value
                    }
                }
            }
        `
    )
};

export default GetExamDetails;