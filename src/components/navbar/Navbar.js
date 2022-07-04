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

const Navbar = () => {

    const navbarLinks = [
        {
            text: "Browse",
            icon: <GridViewRoundedIcon/>,
            link: "/"
        },
        {
            text: "Your exams",
            icon: <DonutSmallRoundedIcon/>,
            link: "/created"
        },
        {
            text: "Create exam",
            icon: <AddIcon/>,
            link: "/create"
        },
        {
            text: "Account",
            icon: <PersonRoundedIcon/>,
            link: "/account"
        },
        {
            text: "Favourites",
            icon: <GradeRoundedIcon/>,
            link: "/favourites"
        }
    ]

    return (
        <div className="navbar_container">
            <div className="navbar_logo_container">
                <img src={Logo} alt="" className="navbar_logo"/>
            </div>
            <div className="navbar_link_container_to_vertical_align">
                <div className="navbar_link_container">
                    {navbarLinks.map((link) => (
                        <div className="navbar_link_element">
                            <Link to={link.link}>{link.icon} <span>{link.text}</span></Link>
                        </div>
                    ))}
                    <div className="navbar_link_element">
                        <Link to="/logout" classname="test"><ExitToAppRoundedIcon/> <span className="logout_button">Logout</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;