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

const GetAllExams = (category, school, sortBy) => {
    let {data, error, loading} = useQuery(GET_EXAMS, {
        variables:{
            category,
            school,
            sortBy
        }
    })

    return (gql`
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
};

export default GetAllExams;