import React from 'react';
import './mainGridElement.scss'
import {CircularProgress, Rating} from "@mui/material";

const MainGridElement = (props) => {

    const backgroundsColors = [
        "#FFC5FB",
        "#9FDEFD",
        "#CCA7ED",
        "#C8EDA7",
        "#82A4F7",
        "#FDDD9F",
        "#E38C9B"
    ]

    let getRandomColor = () => {

        return backgroundsColors[Math.floor(Math.random() * backgroundsColors.length)]
    }

    return (
        <div className="main_grid_element_container">
            <div className="main_grid_element_container_top" style={{
                gridTemplateColumns: props.widths
            }}>
                {
                    Object.keys(props.data).map((key, index) => (
                        index < props.elementToShow ?
                            (
                                props.isFirstId && key === props.idName ?
                                    <div className="single_grid_element_container_id">
                                        <p className="single_grid_element_container_id"
                                           style={{background: getRandomColor()}}>
                                            {props.data[key]}
                                        </p>
                                    </div> :
                                    <div className="single_grid_element_container">
                                        <p className="single_grid_element_container_text">
                                            {props.data[key]}
                                        </p>
                                    </div>
                            ) : ('')
                    ))}
            </div>
            <div className="main_grid_element_container_bottom" style={{
                gridTemplateColumns: `repeat(${Object.keys(props.data).length - props.elementToShow}, 1fr)`
            }}>
                {
                    Object.keys(props.data).map((key, index) => (
                        index >= props.elementToShow ?
                            (
                                <div className="single_grid_element_container_bottom">
                                    <div className="single_grid_element_container_text">
                                        {typeof props.data[key] == 'object' ?
                                            <div className="single_grid_element_bottom_icons_container">
                                                {props.data[key].ownType === 'average' ? (
                                                        <>
                                                            <CircularProgress variant="determinate"
                                                                              value={props.data[key].value}/>
                                                            <p className="single_grid_element_bottom_icons_text">{props.data[key].value}% average score</p>
                                                        </>)
                                                    : ('')
                                                }
                                                {props.data[key].ownType === 'rating' ? (
                                                        <>
                                                            <Rating name="half-rating" value={props.data[key].value} readOnly precision={0.5}  style={{color:"#5B59B5"}}/>
                                                        </>)
                                                    : ('')
                                                }
                                                {props.data[key].ownType === 'activeQuestions' ? (
                                                        <>
                                                            <p style={{background:"#C8EDA7", padding:"5px 13px", borderRadius:"7px", color:"white"}}>{props.data[key].value}</p>
                                                            <p className="single_grid_element_bottom_icons_text">Active questions</p>
                                                        </>)
                                                    : ('')
                                                }
                                                {props.data[key].ownType === 'attempts' ? (
                                                        <>
                                                            <p style={{background:"#82A4F7", padding:"5px 13px", borderRadius:"7px", color:"white"}}>{props.data[key].value}</p>
                                                            <p className="single_grid_element_bottom_icons_text">Active questions</p>
                                                        </>)
                                                    : ('')
                                                }
                                            </div>
                                            :
                                            <p>{props.data[key]}</p>
                                        }
                                    </div>
                                </div>
                            ) : ('')
                    ))}
            </div>
        </div>
    );
};

export default MainGridElement;