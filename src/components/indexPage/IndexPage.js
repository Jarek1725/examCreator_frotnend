import React from 'react';
import './indexPageStyle.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BrowseTab from "../tabs/browse/BrowseTab";
import Navbar from "../navbar/Navbar";


const IndexPage = () => {
    return (
        <>
            <Router>
                <div className="index_container">
                    <Navbar/>
                    <Routes>
                        <Route exact path="/" element={<BrowseTab/>}/>
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default IndexPage;