import React, {FC, useEffect} from 'react';
import Slider from "react-slick";
import {useSelector} from "react-redux";

import scss from './SliderNowPlayingMovie.module.scss';
import {settings} from "../../utils/SettingForSlider";
import {MovieForSlider} from "../MovieForSlider/MovieForSlider";
import {RootState, useAppDispatch} from "../../store/store";
import {fetchNowPlayingMovie} from "../../store/slices/movie/asyncActions";

const SliderNowPlayingMovie: FC = () => {

    const {data} = useSelector((state: RootState) => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNowPlayingMovie())
    }, [])

    return (
        <section className={scss.sliderNowPlayingMovie}>
            <div className={scss.sliderNowPlayingMovie_title}>
                <h2>Фільми в кінотеатрах</h2>
                <button>Дивитись всі</button>
            </div>
            <Slider {...settings}>
                {
                    Array.isArray(data.results) &&
                    data.results.map(movie => <MovieForSlider key={movie.id} {...movie}/>)
                }
            </Slider>
        </section>
    );
};

export {SliderNowPlayingMovie};