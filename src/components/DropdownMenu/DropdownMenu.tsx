import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import scss from './DropdownMenu.module.scss'

const DropdownMenu: FC = () => {
    return (
        <nav className={scss.menu}>
            <ul>
                <NavLink to={'/'}>
                    <li>
                        Головна
                    </li>
                </NavLink>
                <li>
                    Фільми
                    <ul>
                        <NavLink to={'movie-discover'}>
                            <li>Всі фільми</li>
                        </NavLink>
                        <NavLink to={'movie-popular'}>
                            <li>Популярні</li>
                        </NavLink>
                        <NavLink to={'movie-now-playing'}>
                            <li>В кінотеатрах</li>
                        </NavLink>
                        <NavLink to={'movie-upcoming'}>
                            <li>Очікувані</li>
                        </NavLink>
                        <NavLink to={'movie-top-rated'}>
                            <li>Рейтингові</li>
                        </NavLink>
                    </ul>
                </li>
                <li>
                    Серіали
                    <ul>
                        <NavLink to={'tv-discover'}>
                            <li>Всі серіали</li>
                        </NavLink>
                        <NavLink to={'tv-popular'}>
                            <li>Популярні</li>
                        </NavLink>
                        <NavLink to={'tv-airing-today'}>
                            <li>Сьогодні в ефірі</li>
                        </NavLink>
                        <NavLink to={'tv-on-the-air'}>
                            <li>Зараз по телевізору</li>
                        </NavLink>
                        <NavLink to={'tv-top-rated'}>
                            <li>Рейтингові</li>
                        </NavLink>
                    </ul>
                </li>
                <li>
                    Персони
                    <ul>
                        <NavLink to={'person-popular'}>
                            <li>Популярні</li>
                        </NavLink>
                    </ul>
                </li>
                <li>
                    Ще
                    <ul>
                        <li>Обговорення</li>
                        <li>Лідери</li>
                        <li>Підтримка</li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export {DropdownMenu};