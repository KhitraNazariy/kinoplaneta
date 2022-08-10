import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './MoviePages.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchPopularMovie} from "../../store/slices/movie/asyncActions";
import {MovieCard} from "../../components";

const PopularMoviePage: FC = () => {

    const {responsePopularMovie} = useSelector((state: RootState) => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (JSON.stringify(responsePopularMovie) === '{}') {
            dispatch(fetchPopularMovie())
        }
    }, [])

    return (
        <div className={scss.wrap}>
            <div className={scss.content}>
                <div className={scss.content_title}>
                    <h2>Популярні фільми</h2>
                    <p>Добірка фільмів усього світу</p>
                </div>
                <div className={scss.content_cards}>
                    {
                        Array.isArray(responsePopularMovie.results) &&
                        responsePopularMovie.results.map(movie => <MovieCard key={movie.id} {...movie}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export {PopularMoviePage};
