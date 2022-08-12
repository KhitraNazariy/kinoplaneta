import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import scss from './MainSections.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchPopularMovie} from "../../store/slices/movie/asyncActions";
import {MovieMainCard} from "../MainCards";

const PopularMovieSection: FC = () => {

    const {responsePopularMovie} = useSelector((state: RootState) => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovie({page: 1}))
    }, [])

    return (
        <section className={scss.section}>
            <div className={scss.section_title}>
                <h2>Популярні фільми</h2>
                <Link to={'movie-popular'}>
                    <button>Дивитись всі</button>
                </Link>
            </div>
            <div className={scss.section_movies}>
                {
                    Array.isArray(responsePopularMovie.results) &&
                    responsePopularMovie.results.slice(0, 10).map(movie => <MovieMainCard key={movie.id} {...movie}/>)
                }
            </div>
        </section>
    );
};

export {PopularMovieSection};