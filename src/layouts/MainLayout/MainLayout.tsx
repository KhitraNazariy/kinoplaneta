import React, {FC, useState} from 'react';

import {Footer, Header, MobileMenu} from "../../components";


const MainLayout: FC = () => {

    const [menuActive, setMenuActive] = useState(false);

    return (
        <>
            <Header active={menuActive} setActive={setMenuActive}/>
            <MobileMenu active={menuActive}/>
            <Footer/>
        </>
    );
};

export {MainLayout};