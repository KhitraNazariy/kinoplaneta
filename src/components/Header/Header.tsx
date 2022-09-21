import React, {Dispatch, FC, SetStateAction} from 'react';
import {Link, NavLink} from "react-router-dom";

import scss from './Header.module.scss';
import {DropdownMenu} from "../DropdownMenu/DropdownMenu";

interface HeaderProps {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>
}

const Header: FC<HeaderProps> = ({active, setActive}) => {

    const logo = require('../../assets/img/logo.png')
    const login = require('../../assets/img/login.png')

    return (
        <header className={scss.header}>
            <div className={scss.header__leftContent}>
                <div className={scss.header__leftContent_logo}>
                    <Link to={'/'}>
                        <img src={logo} alt="icon-logo"/>
                    </Link>
                </div>
                <DropdownMenu/>
            </div>
            <div className={scss.header__rightContent}>
                <NavLink to={''}>Реєстрація</NavLink>
                <div className={scss.header__rightContent_mobile}>
                    <div onClick={() => setActive(!active)} className={scss.header__rightContent_mobile_burgerMenu}>
                        <span></span>
                    </div>
                    <img className={scss.header__rightContent_mobile_login} src={login} alt="login-icon"/>
                </div>
            </div>
        </header>
    );
};

export {Header};