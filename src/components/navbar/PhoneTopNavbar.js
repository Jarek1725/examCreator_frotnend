import React from 'react';
import './phoneTopNavbarStyle.scss'
import Logo from '../common/assets/logo.svg'
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';

const PhoneTopNavbar = (props) => {

    const showMenuList = () =>{
        document.querySelectorAll('.navbar_container').forEach(e=>{
            e.style.marginTop = 0;
        })
    }

    return (
        <div className="phone_top_navbar_container">
            <div className="phone_top_navbar_container_right">
                <img src={Logo} alt=""/>
            </div>
            <div className="phone_top_navbar_container_left">
                <p className="phone_top_navbar_container_left_text">Browse</p>
                <WidgetsRoundedIcon onClick={()=>showMenuList()}/>
            </div>
        </div>
    );
};

export default PhoneTopNavbar;