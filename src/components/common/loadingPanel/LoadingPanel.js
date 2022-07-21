import React from 'react';
import {CircularProgress} from "@mui/material";
import './loadingPageStyle.scss'

const LoadingPanel = () => {
    return (
        <div className="loading_panel_container"><CircularProgress color="secondary"/></div>
    );
};

export default LoadingPanel;