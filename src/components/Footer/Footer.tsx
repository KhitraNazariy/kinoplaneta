import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {BiMoviePlay} from "react-icons/bi";

import scss from './Footer.module.scss';

const Footer: FC = () => {



    return (
        <footer className={scss.footer}>
            <div className={scss.footer_logo}>
                <Link to={'/'}>
                    <BiMoviePlay className={scss.footer_logo_icon}/>
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