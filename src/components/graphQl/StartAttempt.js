import React from 'react';
import {gql} from "@apollo/client";

const StartAttempt = () => {
    return (gql`
        mutation StartAttempt($examPublicId:String, $appUserPrivateToken:String){
            startAttempt(examPublicId:$examPublicId, appUserPrivateToken:$appUserPrivateToken){
                id
                value
                points
                exam{
                    title
                }
                answers{
                    id
                    value
                }
            }
        }
    `)
};

export default StartAttempt;