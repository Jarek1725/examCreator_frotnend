import React from 'react';
import {gql} from "@apollo/client";


const GetAllExams = () => {
    return (gql`
        query {
            exams{
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
};

export default GetAllExams;