import React, {useEffect, useState} from 'react';
import './indexPageStyle.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BrowseTab from "../tabs/browse/BrowseTab";
import Navbar from "../navbar/Navbar";
import SearchPanel from "../common/searchPanel/SearchPanel";
import PhoneTopNavbar from "../navbar/PhoneTopNavbar";
import LoginPage from "../loginPage/LoginPage";
import {gql, useLazyQuery} from "@apollo/client";
import {CircularProgress} from "@mui/material";


const LOGIN = gql`
    query Login($privateToken:String){
        login(privateToken:$privateToken){
            publicToken
        }
    }
`

const IndexPage = () => {

    const [login, {error: loginError, data: loginData, loading: loginLoading}] = useLazyQuery(LOGIN)
    const [isPageLoading, setIsPageLoading] = useState(true)
    const [privateToken, setPrivateToken] = useState(false);

    useEffect(() => {
        let privateToken = document.cookie.match('(^|;)\\s*privateToken\\s*=\\s*([^;]+)')?.pop() || ''

        login({
            variables: {
                privateToken
            }
        }).then(res => {
            if (res.error) {
                setPrivateToken(false)
            } else {
                document.cookie=`publicToken=${res.data.login.publicToken}; expires=${24 * 60 * 60 * 1000}`
                setPrivateToken(true)
            }
            setIsPageLoading(false)
        })
    }, [])

    if (isPageLoading) return <div className="login_page_container"><CircularProgress
        color="secondary"/></div>

    return (
        <>
            {privateToken ?
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
                </Router> :
                <LoginPage/>
            }

        </>
    );
};

export default IndexPage;