import React, {Dispatch, FC, SetStateAction} from 'react';
import {Link} from "react-router-dom";
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
                <Link to={'login'}><BiLogInCircle className={scss.header__rightContent_register}/></Link>
                <div className={scss.header__rightContent_mobile}>
                    <div
                        onClick={() => setActive(!active)}
                        className={scss.header__rightContent_mobile_burgerMenu}
                    >
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export {Header};