import React from 'react';
import './browseRightPanelGridElementStyle.scss'

const BrowseRightPanelGridElement = (props) => {
    return (
        <>
            {props.data.map(exam => (
                <div className="browse_right_panel_grid_container">
                    <p className="browse_right_panel_grid_categories">{exam.categories}</p>
                    <p className="browse_right_panel_grid_name">{exam.name}</p>
                    {exam.result ?
                        <p className="browse_right_panel_grid_result_passed">Passed</p>
                        :
                        <p className="browse_right_panel_grid_result_failed">Failed</p>
                        }

                </div>
            ))}
        </>
    );
};

export default BrowseRightPanelGridElement;