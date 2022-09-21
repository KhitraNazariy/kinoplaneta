import React, {Dispatch, FC, SetStateAction} from 'react';
import {Link, NavLink} from "react-router-dom";

import LoginIcon from '../../assets/img/login.png';
import scss from './Header.module.scss';
import {DropdownMenu} from "../DropdownMenu/DropdownMenu";
import {MdMovie} from "react-icons/md";

interface HeaderProps {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>
}

const Header: FC<HeaderProps> = ({active, setActive}) => {
    return (
        <header className={scss.header}>
            <div className={scss.header__leftContent}>
                <div className={scss.header__leftContent_logo}>
                    <Link to={'/'}>
                        <MdMovie className={scss.header__leftContent_icon}/>
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
                    <img className={scss.header__rightContent_mobile_login} src={LoginIcon} alt="login-icon"/>
                </div>
            </div>
        </header>
    );
};

export {Header};