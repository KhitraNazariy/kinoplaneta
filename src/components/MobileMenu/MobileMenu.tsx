import React, {FC} from 'react';

import scss from './MobileMenu.module.scss';
import {Link} from "react-router-dom";

interface MobileMenuProps {
    active: boolean
}

const MobileMenu: FC<MobileMenuProps> = ({active}) => {
    return (
        <div className={active ? scss.active : scss.menu}>
            <div className={scss.menu__content}>
                <div className={scss.menu__content_header}>Меню</div>
                <ul className={scss.menu__content_nav}>
                    <Link to={'/'}>
                        <li>Головна</li>
                    </Link>
                    <Link to={'movie-discover'}>
                        <li>Фільми</li>
                    </Link>
                    <Link to={'tv-discover'}>
                        <li>Серіали</li>
                    </Link>
                    <li>Персони</li>
                </ul>
            </div>
        </div>
    );
};

export {MobileMenu};