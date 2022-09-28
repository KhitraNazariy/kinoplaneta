import React, {Dispatch, FC, SetStateAction} from 'react';
import {Link, NavLink} from "react-router-dom";
import {BiLogInCircle, BiMoviePlay} from "react-icons/bi";

import scss from './Header.module.scss';
import {DropdownMenu} from "../DropdownMenu/DropdownMenu";

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
                        <BiMoviePlay className={scss.header__leftContent_logo_icon}/>
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
                    <BiLogInCircle className={scss.header__rightContent_mobile_login}/>
                </div>
            </div>
        </header>
    );
};

export {Header};