import React from 'react';
import './examDetailsTopPanelStyle.scss'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useNavigate} from "react-router-dom";

const ExamDetailsTopPanel = () => {
    const navigate = useNavigate();

    return (
        <div className="details_top_panel_container">
            <div className="details_top_panel_go_back_container" onClick={() => navigate(-1)}>
                <KeyboardBackspaceIcon/>
                <p>Go back</p>
            </div>
            <div className="details_top_panel_exam_name">
                <h2>Podstawy programowania</h2>
            </div>
        </div>
    );
};

export default ExamDetailsTopPanel;