import React, {Dispatch, FC, SetStateAction} from 'react';
import {Link} from "react-router-dom";
import {BiHome} from "react-icons/bi";
import {TbMovie} from "react-icons/tb";
import {AiOutlineHeart, AiOutlineVideoCamera} from "react-icons/ai";
import {MdOutlinePersonOutline} from "react-icons/md";

import scss from './MobileMenu.module.scss';

interface MobileMenuProps {
    active: boolean
    setMenuActive: Dispatch<SetStateAction<boolean>>
}

const MobileMenu: FC<MobileMenuProps> = ({active, setMenuActive}) => {


    return (
        <div
            className={active ? scss.active : scss.menu}
            style={{height: window.screen.height}}
        >
            <div className={scss.menu__content} onClick={() => setMenuActive(!active)}>

                <div className={scss.menu__content_block}>
                    <Link to={'/'}><h2><BiHome/>Головна</h2></Link>
                </div>

                <div className={scss.menu__content_block}>
                    <Link to={'movie-discover'}><h2><TbMovie/>Всі фільми</h2></Link>
                    <div className={scss.list}>
                        <Link to={'movie-popular'}>
                            <div>Популярні</div>
                        </Link>
                        <Link to={'movie-now-playing'}>
                            <div>В кінотеатрах</div>
                        </Link>
                        <Link to={'movie-upcoming'}>
                            <div>Очікувані</div>
                        </Link>
                        <Link to={'movie-top-rated'}>
                            <div>Рейтингові</div>
                        </Link>
                    </div>
                </div>

                <div className={scss.menu__content_block}>
                    <Link to={'tv-discover'}><h2><AiOutlineVideoCamera/>Всі серіали</h2></Link>
                    <div className={scss.list}>
                        <Link to={'tv-popular'}>
                            <div>Популярні</div>
                        </Link>
                        <Link to={'tv-airing-today'}>
                            <div>Сьогодні в ефірі</div>
                        </Link>
                        <Link to={'tv-on-the-air'}>
                            <div>Зараз по телевізору</div>
                        </Link>
                        <Link to={'tv-top-rated'}>
                            <div>Рейтингові</div>
                        </Link>
                    </div>
                </div>

                <div className={scss.menu__content_block}>
                    <Link to={'person-popular'}><h2><MdOutlinePersonOutline/>Персони</h2></Link>
                    <div className={scss.list}>
                        <Link to={'person-popular'}>
                            <div>Популярні</div>
                        </Link>
                    </div>
                </div>

                <div className={scss.menu__content_block}>
                    <Link to={''}><h2><AiOutlineHeart/>Обрані</h2></Link>
                </div>

            </div>
        </div>
    );
};

export {MobileMenu};