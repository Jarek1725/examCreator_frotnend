import React from 'react';
import {gql} from "@apollo/client";

const EndAttempt = () => {
    return (gql`
        mutation endAttempt($selectedAnswers:[SelectedAnswers], $attemptId:Int, $appUserPrivateToken:String){
            endAttempt(selectedAnswers:$selectedAnswers, attemptId:$attemptId, appUserPrivateToken:$appUserPrivateToken)
        }
    `)
};

export default EndAttempt;