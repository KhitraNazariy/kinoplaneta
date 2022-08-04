import React, {FC} from 'react';

import scss from './MobileMenu.module.scss';

const MobileMenu: FC<any> = ({active, setActive}) => {
    return (
        <div className={active ? scss.active : scss.menu}>
            <div className={scss.menu__content}>
                <div className={scss.menu__content_header}>Меню</div>
                <ul className={scss.menu__content_nav}>
                    <li>Головна</li>
                    <li>Фільми</li>
                    <li>Серіали</li>
                    <li>Персони</li>
                </ul>
            </div>
        </div>
    );
};

export {MobileMenu};