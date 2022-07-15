import React from 'react';
import {gql, useLazyQuery, useQuery} from "@apollo/client";


const GetAllExams = () => {
    return (gql`
        query {
            getExams{
                id
                title
                createDate
                averageScore
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
            }
        }
    `)
};

export default GetAllExams;