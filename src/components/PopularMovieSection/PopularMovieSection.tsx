import React, {FC, useEffect} from 'react';

import scss from './PopularMovieSection.module.scss';
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store/store";
import {fetchPopularMovie} from "../../store/slices/movie/asyncActions";
import {MovieMainBlock} from "../MovieMainBlock/MovieMainBlock";

const PopularMovieSection: FC = () => {

    const {responsePopularMovie} = useSelector((state: RootState) => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovie())
    }, [])

    return (
        <section className={scss.popularMovieSection}>
            <div className={scss.popularMovieSection_title}>
                <h2>Популярні фільми</h2>
                <button>Дивитись всі</button>
            </div>
            <div className={scss.popularMovieSection_movies}>
                {
                    Array.isArray(responsePopularMovie.results) &&
                    responsePopularMovie.results.slice(0, 10).map(movie => <MovieMainBlock key={movie.id} {...movie}/>)
                }
            </div>
            <div className={scss.popularMovieSection_bottomButton}>
                <button>Дивитись всі</button>
            </div>
        </section>
    );
};

export {PopularMovieSection};