import React from 'react';
import './browseRIghtPanelStyle.scss'
import BrowseRightPanelGridElement from "./BrowseRightPanelGridElement";
import {useQuery} from "@apollo/client";
import getAllExams from "../../../graphQl/getAllExams";
import getUserLastExams from "../../../graphQl/getUserLastExams";
import GetUserLastExams from "../../../graphQl/getUserLastExams";

const BrowseRightPanel = () => {

    const historyData = [
        {
            date: "22.07.2022",
            exams: [
                {
                    id: "#S34F35",
                    categories: "Podstawy programowanie, Sesja 2022",
                    name: "Egzamin WIEIK programowanie",
                    result: 1
                },
                {
                    id: "#24GS5U",
                    categories: "ASK, Sesja 2021",
                    name: "Kolokwium zaliczeniowe ASK",
                    result: 0
                },
                {
                    id: "#BA35FS",
                    categories: "Matematyka",
                    name: "Egzamin Matematyka Dyskretna",
                    result: 1
                }
            ]
        },
        {
            date: "21.07.2022",
            exams: [
                {
                    id: "#S34F31",
                    categories: "Podstawy programowanie, Sesja 2022",
                    name: "Egzamin WIEIK programowanie",
                    result: 1
                }
            ]
        },
        {
            date: "13.02.2022",
            exams: [
                {
                    id: "#S34F32",
                    categories: "Podstawy programowanie, Sesja 2022",
                    name: "Egzamin WIEIK programowanie",
                    result: 1
                }
            ]
        }
    ]

    let examId = null
    let publicToken = null

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

    if(loading) return <p>test</p>

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