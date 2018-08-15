import React from 'react'
import classes from './Navigation.css'
import { NavLink } from 'react-router-dom';

const navigation = (props) => (
    <header className={classes.Navigation}>
        <div className={classes.header__container}>
            <nav className={classes.header__navitems}>
                <ul>
                    <li className={classes.header__navitem__logo}>
                    <NavLink 
                    to="/" 
                    >
                    TODO LIST
                    </NavLink>
                    </li>
                    <li className={classes.header__navitem__signup}>
                    <NavLink
                    to="/auth"
                    >
                    SIGN UP
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default navigation;