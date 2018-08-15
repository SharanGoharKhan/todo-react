import React from 'react'
import classes from './Navigation.css'

const navigation = (props) => (
    <header className={classes.Navigation}>
        <div className={classes.header__container}>
            <nav className={classes.header__navitems}>
                <a className={classes.header__navitem__logo}>
                TODO LIST
                </a>
                <div className={classes.box__navitem}>
                    <a className={classes.header__navitem}>
                        SIGN UP
                    </a>
                </div>
            </nav>
        </div>
    </header>
)

export default navigation;