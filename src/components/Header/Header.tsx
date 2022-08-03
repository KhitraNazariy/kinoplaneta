import React, {FC} from 'react';

import logoIcon from '../../assets/img/logo.png'
import menuIcon from '../../assets/img/menu.png';
import loginIcon from '../../assets/img/login.png';
import scss from './Header.module.scss';
import {DropdownMenu} from "../DropdownMenu/DropdownMenu";
import {NavLink} from "react-router-dom";

const Header: FC = () => {
    return (
        <header className={scss.header}>
            <div className={scss.header__leftContent}>
                <div className={scss.header__leftContent_logo}>
                    <img src={logoIcon} alt="icon-logo"/>
                </div>
                <DropdownMenu/>
            </div>
            <div className={scss.header__rightContent}>
                <NavLink to={''}></NavLink>
                <div className={scss.header__rightContent_mobile}>
                    <div>
                        <img src={menuIcon} alt="menu-icon"/>
                    </div>
                    <div>
                        <img src={loginIcon} alt="login-icon"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export {Header};