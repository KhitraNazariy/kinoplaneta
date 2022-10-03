import React, {FC} from 'react';
import {Link} from "react-router-dom";

import scss from './DropdownMenu.module.scss'

const DropdownMenu: FC = () => {
    return (
        <nav className={scss.menu}>
            <ul>
                <Link to={'/'}>
                    <li>
                        Головна
                    </li>
                </Link>
                <li>
                    Фільми
                    <ul>
                        <Link to={'movie-discover'}>
                            <li>Всі фільми</li>
                        </Link>
                        <Link to={'movie-popular'}>
                            <li>Популярні</li>
                        </Link>
                        <Link to={'movie-now-playing'}>
                            <li>В кінотеатрах</li>
                        </Link>
                        <Link to={'movie-upcoming'}>
                            <li>Очікувані</li>
                        </Link>
                        <Link to={'movie-top-rated'}>
                            <li>Рейтингові</li>
                        </Link>
                    </ul>
                </li>
                <li>
                    Серіали
                    <ul>
                        <Link to={'tv-discover'}>
                            <li>Всі серіали</li>
                        </Link>
                        <Link to={'tv-popular'}>
                            <li>Популярні</li>
                        </Link>
                        <Link to={'tv-airing-today'}>
                            <li>Сьогодні в ефірі</li>
                        </Link>
                        <Link to={'tv-on-the-air'}>
                            <li>Зараз по телевізору</li>
                        </Link>
                        <Link to={'tv-top-rated'}>
                            <li>Рейтингові</li>
                        </Link>
                    </ul>
                </li>
                <li>
                    Персони
                    <ul>
                        <Link to={'person-popular'}>
                            <li>Популярні</li>
                        </Link>
                    </ul>
                </li>
                <li>
                    Обрані
                    <ul>
                        <Link to={'selected-movie'}>
                            <li>Фільми</li>
                        </Link>
                        <Link to={'selected-tv'}>
                            <li>Серіали</li>
                        </Link>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export {DropdownMenu};