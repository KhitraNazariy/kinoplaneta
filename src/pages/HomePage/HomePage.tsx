import React, {FC} from 'react';

import scss from './HomePage.module.scss';
import {Poster, SliderNowPlayingMovie} from "../../components";

const HomePage: FC = () => {

    return (
        <>
            <Poster/>
            <div className={scss.mainContent}>
                <SliderNowPlayingMovie/>
            </div>
        </>
    );
};

export {HomePage};