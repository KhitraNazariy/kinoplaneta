import React, {FC, useEffect} from 'react';
import Slider from "react-slick";
import {useSelector} from "react-redux";

import scss from './Sliders.module.scss';
import {settings} from "../../utils/SettingForSlider";
import {MovieForSlider} from "../ItemForSlider";
import {RootState, useAppDispatch} from "../../store/store";
import {fetchNowPlayingMovie} from "../../store/slices/movie/asyncActions";

const SliderNowPlayingMovie: FC = () => {

    const {responseNowPlayingMovie} = useSelector((state: RootState) => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNowPlayingMovie({page: 1}))
    }, [])

    return (
        <section className={scss.slider}>
            <div className={scss.slider_title}>
                <h2>Фільми в кінотеатрах</h2>
                <button>Дивитись всі</button>
            </div>
            <Slider {...settings}>
                {
                    Array.isArray(responseNowPlayingMovie.results) &&
                    responseNowPlayingMovie.results.map(movie => <MovieForSlider key={movie.id} {...movie}/>)
                }
            </Slider>
        </section>
    );
};

export {SliderNowPlayingMovie};