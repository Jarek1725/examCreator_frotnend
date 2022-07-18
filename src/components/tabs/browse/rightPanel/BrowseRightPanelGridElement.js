import React from 'react';
import './browseRightPanelGridElementStyle.scss'

const BrowseRightPanelGridElement = (props) => {
    console.log("DATA")
    props.data.forEach(exam => (console.log((exam.exam.maxPoints*exam.exam.percentToPass)/100)))
    props.data.forEach(exam => (console.log((exam))))
    return (
        <>
            {props.data.map(exam => (
                <div className="browse_right_panel_grid_container" key={exam.exam.title}>
                    <p className="browse_right_panel_grid_categories">{exam.exam.categories.map((category, index) => (
                        index === 0 ? `${category.value}` : `, ${category.value}`
                    ))}</p>
                    <p className="browse_right_panel_grid_name">{exam.exam.title}</p>
                    {exam.score >= (exam.exam.maxPoints*exam.exam.percentToPass)/100 ?
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