import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import * as cartActions from '../../store/cart';
import './NavBar.css';
import location from '../../assets/images/navbar_location_marker.png';
import NavBarLinks from './NavBarLinks';
import SearchBar from '../SearchBar';
import flag from '../../assets/images/usa_flag.png'
import dropDown from '../../assets/images/dropdown_arrow.png'
import cartLogo from '../../assets/images/cart.png';

const NavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const signInOutButton = sessionUser ? 'Sign out' : 'Sign in' ;

    const cart = useSelector(cartActions.getCartItems);
    
    useEffect(() => {
        if (sessionUser) {
            dispatch(cartActions.fetchCartItems());
        }
    }, [dispatch])

    const toCart = e => {
        history.push('/cart');
    }

    const totalCartItems = () => {
        let total = 0;

        if (!cart) return total;

        for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
            total += product.quantity
        }

        return total;
    }

    const logoutOfAccount = e => {
        dispatch(cartActions.clearCartItems());
        dispatch(sessionActions.logout())
        history.push(`/`)
    }

    const navBarButton = () => {
        if ( sessionUser ) {
            return (
                <button className="navbar-login-logout" onClick={logoutOfAccount}>
                    {signInOutButton}
                </button>
            )
        } else {
            return (
                <Link to='/login'>
                    <button className="navbar-login-logout">
                        {signInOutButton}
                    </button>
                </Link>
            )
        }
    }

    return (
        <div className="navbar-wrapper">
            <div className="navbar-top">
                <div className="navbar-element-border">
                    <Link to="/">
                        <img id="navbar-logo" src="https://amazonosrs-seeds.s3.amazonaws.com/OSRZon_white.png"></img>
                    </Link>
                </div>
                <div className="navbar-element-border" id="navbar-location-display">
                    <img id="navbar-location-icon" src={location}></img>
                    <div id="navbar-location-textbox-wrapper">
                        <p id="navbar-hello">Hello</p>
                        <p id="navbar-welcome">Welcome to Gielinor</p>
                    </div>
                </div>
                <SearchBar />
                <div id="navbar-language" className="navbar-element-border">
                    <img id="flag" src={flag}/>
                    <span>EN</span>
                    <img id="arrow" src={dropDown} />
                </div>
                {navBarButton()}
                <div
                    id="navbar-cart-wrapper"
                    className="navbar-element-border"
                    onClick={toCart}
                >
                    <img id="navbar-cart" src={cartLogo} />
                    <p id="navbar-cart-total">
                        {totalCartItems()}
                    </p>
                </div>
            </div>
            <NavBarLinks />
        </div>
    )
}

export default NavBar;