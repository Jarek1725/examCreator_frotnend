import React from 'react';
import './browseTabMainGridPanel.scss'
import {CircularProgress, Rating} from "@mui/material";
import getAllExams from "../../graphQl/getAllExams";
import {useQuery} from "@apollo/client";

const BrowseTabMainGridPanel = (props) => {

    const backgroundsColors = [
        "#FFC5FB",
        "#9FDEFD",
        "#CCA7ED",
        "#C8EDA7",
        "#82A4F7",
        "#FDDD9F",
        "#E38C9B"
    ]

    const getRandomColor = () => {
        console.log(props.data)
        return backgroundsColors[Math.floor(Math.random() * backgroundsColors.length)]
    }


    return (
        <div className="browse_tab_main_grid_panel_container" key={props.id}>
            <div className="browse_tab_main_grid_panel_top_container">
                <div className="browse_tab_main_grid_panel_id_container">
                    <p className="browse_tab_main_grid_panel_id_text" style={{background: backgroundsColors[props.data.colorValue]}}
                       title={`#${props.data.publicId}`}>
                        #{props.data.publicId}
                    </p>
                </div>
                <div className="browse_tab_main_grid_panel_name_container">
                    <p className="browse_tab_main_grid_panel_name_text" title={props.data.title}>
                        {props.data.title}
                    </p>
                </div>
                <div className="browse_tab_main_grid_panel_categories_container">
                    <p className="browse_tab_main_grid_panel_categories_text"
                       title={props.data.categories.map((category, index) => (
                           index == 0 ? category.value :
                               ` ${category.value}`
                       ))}
                    >
                        {props.data.categories.map((category, index) => (
                            props.data.categories.map((category, index) => (
                                index == 0 ? category.value :
                                    ` ${category.value}`
                            ))
                        ))}
                    </p>
                </div>
                <div className="browse_tab_main_grid_panel_date_container">
                    <p className="browse_tab_main_grid_panel_date_text">
                        {props.data.createDate}
                    </p>
                </div>
                </div>
                <div className="browse_tab_main_grid_panel_bottom_container">
                    <div
                        className="browse_tab_main_grid_panel_bottom_average_container browse_tab_main_grid_panel_bottom_data">
                        <CircularProgress variant="determinate" value={props.data.averageScore}
                                          className="browse_tab_main_grid_panel_bottom_data_average_progress"/>
                        <p className="browse_tab_main_grid_panel_bottom_average single_grid_element_bottom_icons_text">
                            {props.data.averageScore.toString().substring(0,2)}% average score
                        </p>
                    </div>
                    <div
                        className="browse_tab_main_grid_panel_bottom_rating_container browse_tab_main_grid_panel_bottom_data">
                        <p className="browse_tab_main_grid_panel_bottom_rating">
                            <Rating name="half-rating" value={props.data.averageExamRating} readOnly precision={0.5}
                                    style={{color: "#5B59B5"}}
                                    className="browse_tab_main_grid_panel_bottom_data_rating_icon"/>
                        </p>
                    </div>
                    <div
                        className="browse_tab_main_grid_panel_bottom_attempts_container browse_tab_main_grid_panel_bottom_data">
                        <p className="browse_tab_main_grid_panel_bottom_attempts" style={{
                            background: "#C8EDA7",
                            padding: "5px 13px",
                            borderRadius: "7px",
                            color: "white"
                        }}>{props.data.questions.length}</p>
                        <p className="single_grid_element_bottom_icons_text">Active questions</p>
                    </div>
                    <div
                        className="browse_tab_main_grid_panel_bottom_attempts_container browse_tab_main_grid_panel_bottom_data">
                        <p className="browse_tab_main_grid_panel_bottom_attempts" style={{
                            background: "#82A4F7",
                            padding: "5px 13px",
                            borderRadius: "7px",
                            color: "white"
                        }}>{props.data.attempts.length}</p>
                        <p className="single_grid_element_bottom_icons_text">Attempts</p>
                    </div>
            </div>
        </div>
    );
};

export default BrowseTabMainGridPanel;