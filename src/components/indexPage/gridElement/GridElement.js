import React from 'react';
import './gridElementStyle.scss'

const GridElement = (props) => {
    return (
        <div className="index_grid_element_container">
            <div className="index_grid_element">
                <p className="index_grid_element_category">
                    {props.examData.category}
                </p>
                <p className="index_grid_element_creator">
                    {props.examData.creator}
                </p>
                <p className="index_grid_element_title">
                    {props.examData.name}
                </p>
            </div>
            <div className="index_grid_element_info">
                <span>i</span>
                <div className="index_grid_element_info_data">
                    <h2>Details</h2>
                    <p>Rating: 4.6/5</p>
                    <p>Average score: 73%</p>
                    <p>Users taking exam: 423</p>
                    <p>Create date: 23.05.2022</p>
                </div>
            </div>
        </div>
    );
};

export default GridElement;