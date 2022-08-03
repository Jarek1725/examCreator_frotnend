import React from 'react';
import './browseRIghtPanelStyle.scss'
import BrowseRightPanelGridElement from "./BrowseRightPanelGridElement";
import {useQuery} from "@apollo/client";
import getAllExams from "../../../graphQl/getAllExams";
import getUserLastExams from "../../../graphQl/getUserLastExams";
import GetUserLastExams from "../../../graphQl/getUserLastExams";

const BrowseRightPanel = () => {

    const {data:attemptData, loading, error} = GetUserLastExams(null, document.cookie.match('(^|;)\\s*publicToken\\s*=\\s*([^;]+)')?.pop() || '')

    let groupedData = []

    if(attemptData && !loading){
        groupedData = attemptData.examAttempts.reduce(function(rv, x) {
            (rv[x["createDate"]] = rv[x["createDate"]] || []).push(x);
            return rv;
        }, {});
        Object.keys(groupedData).forEach(e=>(
            console.log(groupedData[e])
        ))
    }

    if(loading) return <p>loading</p>

    return (
        <div className="browse_right_panel_container">
            <div className="browse_right_panel_header_container">
                <p>Your last exams</p>
                {
                        Object.keys(groupedData).map(e=>(
                            <div className="exam_by_day_container" key={e.date}>
                                <p>{e}</p>
                                <BrowseRightPanelGridElement data={groupedData[e]}/>
                            </div>
                    ))
                    // historyData.map(e => (
                    //     <div className="exam_by_day_container" key={e.date}>
                    //         <p>{e.date}</p>
                    //         <BrowseRightPanelGridElement data={e.exams}/>
                    //     </div>
                    // ))
                }
            </div>
        </div>
    );
};

export default BrowseRightPanel;