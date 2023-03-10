import React, { useState } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import FrontPageItemIndex from '../FrontPageItemIndex';
import ItemShowPage from '../ItemShowPage';
import * as itemsActions from '../../store/items';
import CartIndex from '../Cart';
import ItemIndex from '../ItemIndex';

const SplashPage = () => {

    return (
        <div className="homepage-wrapper">
            <NavBar />
            <Switch>
                <Route path="/cart">
                    <CartIndex />
                </Route>
                <Route path="/items/index">
                    <ItemIndex />
                </Route>
                <Route path="/items/:id">
                    <ItemShowPage />
                </Route>
                <Route path="/">
                    <FrontPageItemIndex />
                </Route>
            </Switch>
        </div>
    )
}

export default SplashPage;