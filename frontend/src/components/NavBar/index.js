import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavBar.css';
import logo from '../../assets/images/navbar_logo.png';
import location from '../../assets/images/navbar_location_marker.png';
import NavBarLinks from './NavBarLinks';
import SearchBar from '../SearchBar';
import flag from '../../assets/images/usa_flag.png'
import dropDown from '../../assets/images/dropdown_arrow.png'


const NavBar = () => {
    const sessionUser = useSelector(state => state.session.user);
    const signInOutButton = sessionUser ? 'Sign out' : 'Sign in' ;

    return (
        <div className="navbar-wrapper">
            <div className="navbar-top">
                <div className="navbar-element-border">
                    <img id="navbar-logo" src={logo}></img>
                </div>
                <div className="navbar-element-border" id="navbar-location-display">
                    <img id="navbar-location-icon" src={location}></img>
                    <div id="navbar-location-textbox-wrapper">
                        <p id="navbar-hello">Hello</p>
                        <p id="navbar-welcome">Welcome to Gielinor</p>
                    </div>
                </div>
                <SearchBar />
                {/*
                    potentially more functionality in navbar language
                    should open a modal that says we only have english
                */}
                <div id="navbar-language" className="navbar-element-border">
                    <img id="flag" src={flag}/>
                    <span>EN</span>
                    <img id="arrow" src={dropDown} />
                </div>
                {/* this is the end of the section */}

                <button className="navbar-login-logout">
                    {signInOutButton}
                </button>

            </div>
            <NavBarLinks />
        </div>
    )
}

export default NavBar;