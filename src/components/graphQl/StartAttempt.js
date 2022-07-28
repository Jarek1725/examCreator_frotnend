import React from 'react';
import {gql} from "@apollo/client";

const StartAttempt = () => {
    return (gql`
        mutation StartAttempt($examPublicId:String, $appUserPrivateToken:String){
            startAttempt(examPublicId:$examPublicId, appUserPrivateToken:$appUserPrivateToken){
                id
                value
                exam{
                    title
                }
                answers{
                    value
                }
            }
        }
    `)
};

export default StartAttempt;