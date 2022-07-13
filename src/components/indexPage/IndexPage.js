import React from 'react';
import './indexPageStyle.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BrowseTab from "../tabs/browse/BrowseTab";
import Navbar from "../navbar/Navbar";
import SearchPanel from "../common/searchPanel/SearchPanel";
import PhoneTopNavbar from "../navbar/PhoneTopNavbar";
import LoginPage from "../loginPage/LoginPage";


const IndexPage = () => {

    let isPrivateToken = () => {
        console.log("cookies")
        console.log(document.cookie)
        return false
    }

    return (
        <>
            {isPrivateToken() ?
                <Router>
                    <div className="index_container">
                        <Navbar/>
                        <PhoneTopNavbar/>
                        <div className="index_mid_panel">
                            <SearchPanel/>
                            <Routes>
                                <Route exact path="/" element={<BrowseTab/>}/>
                            </Routes>
                        </div>
                    </div>
                </Router>:
                <LoginPage/>
            }

        </>
    );
};

export default IndexPage;