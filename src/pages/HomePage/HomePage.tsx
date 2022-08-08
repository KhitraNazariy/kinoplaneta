import React, {FC} from 'react';

import scss from './HomePage.module.scss';
import {
    PopularMovieSection,
    Poster,
    SliderNowPlayingMovie
} from "../../components";

const HomePage: FC = () => {

    return (
        <>
            <Poster/>
            <div className={scss.mainContent}>
                <SliderNowPlayingMovie/>
                <PopularMovieSection/>
            </div>
        </>
    );
};

export {HomePage};