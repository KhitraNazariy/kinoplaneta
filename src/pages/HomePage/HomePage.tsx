import React, {FC} from 'react';

import scss from './HomePage.module.scss';
import {
    PopularMovieSection, PopularTvSection,
    Poster,
    SliderNowPlayingMovie,
    SliderTopRatedTv
} from "../../components";

const HomePage: FC = () => {

    return (
        <>
            <Poster/>
            <div className={scss.mainContent}>
                <SliderNowPlayingMovie/>
                <PopularMovieSection/>
                <SliderTopRatedTv/>
                <PopularTvSection/>
            </div>
        </>
    );
};

export {HomePage};