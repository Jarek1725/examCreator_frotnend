import React from 'react';
import './indexPageStyle.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BrowseTab from "../tabs/browse/BrowseTab";
import Navbar from "../navbar/Navbar";
import SearchPanel from "../common/searchPanel/SearchPanel";


const IndexPage = () => {
    return (
        <>
            <Router>
                <div className="index_container">
                    <Navbar/>
                    <div className="index_mid_panel">
                        <SearchPanel/>
                        <Routes>
                            <Route exact path="/" element={<BrowseTab/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    );
};

export default IndexPage;