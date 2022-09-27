import React, {FC} from 'react';
import {Link} from "react-router-dom";

import scss from './Footer.module.scss';
import logo from '../../assets/img/logo.png';

const Footer: FC = () => {



    return (
        <footer className={scss.footer}>
            <div className={scss.footer_logo}>
                <Link to={'/'}>
                    <img src={logo} alt="logo-icon"/>
                </Link>
            </div>
            <nav>
                <ul className={scss.footer_nav}>
                    <Link to={'movie-discover'}>
                        <li className={scss.footer_nav_item}>Фільми</li>
                    </Link>
                    <Link to={'tv-discover'}>
                        <li className={scss.footer_nav_item}>Серіали</li>
                    </Link>
                    <Link to={'person-popular'}>
                        <li className={scss.footer_nav_item}>Персони</li>
                    </Link>
                </ul>
            </nav>
            <div className={scss.footer_someInfo}>
                <p>© 2022 Kinoplaneta</p>
            </div>
        </footer>
    );
};

export {Footer};