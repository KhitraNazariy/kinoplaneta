import React, {FC} from 'react';
import {Link, NavLink} from "react-router-dom";

import logoIcon from '../../assets/img/logo.png';
import scss from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={scss.footer}>
            <div className={scss.footer_logo}>
                <Link to={'/'}>
                    <img src={logoIcon} alt="logo-icon"/>
                </Link>
            </div>
            <nav>
                <ul className={scss.footer_nav}>
                    <NavLink to={'movie-discover'}>
                        <li className={scss.footer_nav_item}>Фільми</li>
                    </NavLink>
                    <NavLink to={'tv-discover'}>
                        <li className={scss.footer_nav_item}>Серіали</li>
                    </NavLink>
                    <NavLink to={'person-popular'}>
                        <li className={scss.footer_nav_item}>Персони</li>
                    </NavLink>
                </ul>
            </nav>
            <div className={scss.footer_someInfo}>
                <p>© 2022 Kinoplaneta</p>
            </div>
        </footer>
    );
};

export {Footer};