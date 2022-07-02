import React from 'react';
import './headerStyle.scss'
import Logo from '../assets/logo.svg'

const Header = () => {
    return (
        <div className="header_container">
            <div className="header_left_panel">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="header_right_panel">
                <p>Exams</p>
                <p>Forms</p>
                <p>Create new</p>
            </div>
        </div>
    );
};

export default Header;