import React, {FC} from 'react';

import logoIcon from '../../assets/img/logo.png'
import menuIcon from '../../assets/img/menu.png';
import loginIcon from '../../assets/img/login.png';
import scss from './Header.module.scss';
import {DropdownMenu} from "../DropdownMenu/DropdownMenu";
import {NavLink} from "react-router-dom";

const Header: FC<any> = ({active, setActive}) => {
    return (
        <header className={scss.header}>
            <div className={scss.header__leftContent}>
                <div className={scss.header__leftContent_logo}>
                    <img src={logoIcon} alt="icon-logo"/>
                </div>
                <DropdownMenu/>
            </div>
            <div className={scss.header__rightContent}>
                <NavLink to={''}>Ввійти</NavLink>
                <div className={scss.header__rightContent_mobile}>
                    <div onClick={() => setActive(!active)} className={scss.header__rightContent_mobile_burgerMenu}>
                        <span></span>
                    </div>
                    <img className={scss.header__rightContent_mobile_login} src={loginIcon} alt="login-icon"/>
                </div>
            </div>
        </header>
    );
};

export {Header};