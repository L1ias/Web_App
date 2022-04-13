import React from 'react';
import './navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className = "container ">
                <div className = "navbar_header">WEB APP</div>
                <div className = "navbar_login"><NavLink to="/login">Войти</NavLink></div>
                <div className = "navbar_registration"><NavLink to="/registration">Регистрация</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;