import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import scss from './MovieDiscoverPage.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchDiscoverMovie, fetchGenresMovie} from "../../store/slices/movie/asyncActions";
import {Loader, MovieCard, Pagination, Search, Sort} from "../../components";
import {changeDisabledBtn, changeSendRequest, resetBtn} from "../../store/slices/sort/sortSlice";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";
import {sort} from "../../utils/sortByMovie";

const MovieDiscoverPage: FC = () => {

    const dispatch = useAppDispatch();
    const {responseDiscoverMovie, error, responseGenresMovie} = useSelector((state: RootState) => state.movie);
    const {
        minValueVoteAv,
        maxValueVoteAv,
        sendRequest,
        minReleaseYear,
        maxReleaseYear,
        isResetBtn,
        genreSort,
        sortBy
    } = useSelector((state: RootState) => state.sort);
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchDiscoverMovie({page, minValueVoteAv, maxValueVoteAv, maxReleaseYear, minReleaseYear, genreId: genreSort.id, sortBy: sortBy.query}))
        dispatch(fetchGenresMovie())
        dispatch(changeSendRequest(false))
        dispatch(changeDisabledBtn(true))
        window.scrollTo(0, 0)

    },[sendRequest, isResetBtn, page])

    const totalPages = () => {
        if (responseDiscoverMovie.total_pages < 500) {
            return responseDiscoverMovie.total_pages
        } else {
            return 500
        }
    }

    if (error) {
        return <BadRequestPage/>
    }

    return (
        <div className={scss.wrap}>
            <div className={scss.container}>
                <div className={scss.container_header}>
                    <div className={scss.container_header_title}>
                        <h2>Всі фільми</h2>
                        <p>Добірка фільмів всього світу</p>
                    </div>
                    <Search
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        placeholder={'Пошук фільмів...'}
                    />
                </div>


                <div className={scss.container_content}>
                    <Sort
                        genres={responseGenresMovie}
                        sort={sort}
                    />
                    <div className={scss.container_content_cards}>
                        {
                            Array.isArray(responseDiscoverMovie.results) &&
                            responseDiscoverMovie.results.map(movie => <MovieCard key={movie.id} {...movie}/>)
                        }
                    </div>
                </div>
                <Pagination totalPages={totalPages()} page={page} setPage={setPage}/>
            </div>
        </div>
    );
}

export {MovieDiscoverPage};