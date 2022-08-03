import React from 'react';
import './browseRightPanelGridElementStyle.scss'
import {useNavigate} from "react-router-dom";

const BrowseRightPanelGridElement = (props) => {

    const navigate = useNavigate();

    console.log(props.exams)

    return (
        <>
            {props.data.map(exam => (
                <div className="browse_right_panel_grid_container" key={exam.exam.title} onClick={()=>navigate(`/attempt/${exam.id}`)}>
                    <p className="browse_right_panel_grid_categories">{exam.exam.categories.map((category, index) => (
                        index === 0 ? `${category.value}` : `, ${category.value}`
                    ))}</p>
                    <p className="browse_right_panel_grid_name">{exam.exam.title}</p>
                    {exam.score >= (exam.exam.maxPoints * exam.exam.percentToPass) / 100 ?
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