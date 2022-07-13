import React from 'react';
import './browseRIghtPanelStyle.scss'
import BrowseRightPanelGridElement from "./BrowseRightPanelGridElement";

const BrowseRightPanel = () => {

    const historyData = [
        {
            date: "22.07.2022",
            exams: [
                {
                    id: "#S34F32",
                    categories:"Podstawy programowanie, Sesja 2022",
                    name: "Egzamin WIEIK programowanie",
                    result: 1
                },
                {
                    id: "#24GS5U",
                    categories:"ASK, Sesja 2021",
                    name: "Kolokwium zaliczeniowe ASK",
                    result: 0
                },
                {
                    id: "#BA35FS",
                    categories:"Matematyka",
                    name: "Egzamin Matematyka Dyskretna",
                    result: 1
                }
            ]
        },
        {
            date: "21.07.2022",
            exams: [
                {
                    id: "#S34F32",
                    categories:"Podstawy programowanie, Sesja 2022",
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
                    categories:"Podstawy programowanie, Sesja 2022",
                    name: "Egzamin WIEIK programowanie",
                    result: 1
                }
            ]
        }
    ]


    return (
        <div className="browse_right_panel_container">
            <div className="browse_right_panel_header_container">
                <p>Your last exams</p>
                {
                    historyData.map(e => (
                        <div className="exam_by_day_container" key={e.exams.title}>
                            <p>{e.date}</p>
                            <BrowseRightPanelGridElement data={e.exams}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BrowseRightPanel;