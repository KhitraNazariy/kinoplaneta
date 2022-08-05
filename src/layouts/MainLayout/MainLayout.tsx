import React, {FC, useState} from 'react';
import {Outlet} from "react-router-dom";

import scss from './MainLayout.module.scss';
import {Footer, Header, MobileMenu} from "../../components";


const MainLayout: FC = () => {

    const [menuActive, setMenuActive] = useState(false);

    return (
        <>
            <Header active={menuActive} setActive={setMenuActive}/>
            <main className={scss.mainContent}>
                <Outlet/>
                <MobileMenu active={menuActive}/>
            </main>
            <Footer/>
        </>
    );
};

export {MainLayout};