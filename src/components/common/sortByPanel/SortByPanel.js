import React from 'react';
import './sortByStyle.scss'

const SortByPanel = (props) => {
    return (
        <div className="sort_by_panel_container" key={props.data.id}>
            {props.data}
        </div>
    );
};

export default SortByPanel;