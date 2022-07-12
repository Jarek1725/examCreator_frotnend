import React from 'react';
import Logo from '../common/assets/logo.svg'
import './navbarStyle.scss'
import {Link} from "react-router-dom";

import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded';
import AddIcon from '@mui/icons-material/Add';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const Navbar = () => {

    const navbarLinks = [
        {
            text: "Browse",
            icon: <GridViewRoundedIcon/>,
            link: "/",
            onlyPhone: false
        },
        {
            text: "Search",
            icon: <SearchRoundedIcon/>,
            link: "/search",
            onlyPhone: true
        },
        {
            text: "Your exams",
            icon: <DonutSmallRoundedIcon/>,
            link: "/created",
            onlyPhone: false
        },
        {
            text: "Create exam",
            icon: <AddIcon/>,
            link: "/create",
            onlyPhone: false
        },
        {
            text: "Account",
            icon: <PersonRoundedIcon/>,
            link: "/account",
            onlyPhone: false
        },
        {
            text: "Favourites",
            icon: <GradeRoundedIcon/>,
            link: "/favourites",
            onlyPhone: false
        }
    ]


    const getDataFromSpring = () => {
        let headers = new Headers();

        headers.append('Content-Type', 'text/html');
        headers.append('Accept', 'text/html');
        headers.append('Origin', '*');
        headers.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")


        fetch(
            "http://localhost:8080/api/v1/user/login", {
                method: 'POST',
                mode: 'cors',
                headers: headers,
                credentials: "include"
            }
        )
            .then(res =>
                res.text()
                    .then(data => {
                        console.log(data)
                    }))
    }

    const closePopup = () => {
        document.querySelectorAll('.navbar_container').forEach(e => {
            e.style.marginTop = "-100vh"
        })
    }

    return (
        <div className="navbar_container">
            <div className="navbar_logo_container">
                <img src={Logo} alt="" className="navbar_logo"/>
            </div>
            <div className="navbar_link_container_to_vertical_align">
                <div className="navbar_link_container">
                    {navbarLinks.map((link) => (

                        link.onlyPhone ?
                            <div className="navbar_link_element navbar_link_element_only_phone">
                                <Link to={link.link}>{link.icon} <span>{link.text}</span></Link>
                            </div> :
                            <div className="navbar_link_element">
                                <Link to={link.link}>{link.icon} <span>{link.text}</span></Link>
                            </div>

                    ))}
                    <div className="navbar_link_element">
                        <div className="close_top_nav_container navbar_link_element_only_phone"
                             onClick={() => closePopup()}>
                            <CloseRoundedIcon/><p>Close</p>
                        </div>
                        <Link to="/logout" classname="test"><ExitToAppRoundedIcon/> <span
                            className="logout_button" onClick={() => getDataFromSpring()}>Logout</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;