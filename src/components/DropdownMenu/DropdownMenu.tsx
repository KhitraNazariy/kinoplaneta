import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import scss from './DropdownMenu.module.scss'

const DropdownMenu: FC = () => {
    return (
        <nav className={scss.menu}>
            <ul>
                <li>
                    Головна
                </li>
                <li>
                    Фільми
                    <ul>
                        <NavLink to={'movie-popular'}>
                            <li>Популярні</li>
                        </NavLink>
                        <NavLink to={'movie-now-playing'}>
                            <li>Зараз в ефірі</li>
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
                        <li>Популярні</li>
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