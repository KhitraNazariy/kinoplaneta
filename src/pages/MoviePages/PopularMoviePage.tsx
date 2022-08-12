import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import scss from './MoviePages.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {MovieCard, Pagination} from "../../components";
import {fetchPopularMovie} from "../../store/slices/movie/asyncActions";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";

const PopularMoviePage: FC = () => {

    const {responsePopularMovie, error, status} = useSelector((state: RootState) => state.movie);
    const dispatch = useAppDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchPopularMovie({page: page}))
        window.scrollTo(0, 0)
    }, [page])

    if (error) {
        return <BadRequestPage/>
    }

    return (
        <div className={scss.wrap}>
            <div className={scss.content}>
                <div className={scss.content_wrap}>
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
                <Pagination totalPages={500} page={page} setPage={setPage}/>
            </div>
        </div>
    );
};

export {PopularMoviePage};
