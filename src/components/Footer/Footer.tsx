import React, {FC} from 'react';

import logoIcon from '../../assets/img/logo.png';
import scss from './Footer.module.scss';
import {Link} from "react-router-dom";

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
                    <li className={scss.footer_nav_item}>Фільми</li>
                    <li className={scss.footer_nav_item}>Серіали</li>
                    <li className={scss.footer_nav_item}>Персони</li>
                </ul>
            </nav>
            <div className={scss.footer_someInfo}>
                <p>© 2022 Kinoplaneta</p>
            </div>
        </footer>
    );
};

export {Footer};