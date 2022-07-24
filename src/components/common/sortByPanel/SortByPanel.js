import React from 'react';
import './sortByStyle.scss'
import {Button} from "@mui/material";

const SortByPanel = (props) => {

    const handleFilterButton = () =>{
        props.getAllExamsFetch()
    }

    return (
        <div className="sort_by_panel_container" key={props.data.id}>
            {props.data}
        </div>
    );
};

export default SortByPanel;