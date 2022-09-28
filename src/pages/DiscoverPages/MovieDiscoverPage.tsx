import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {FaSortAmountDownAlt} from "react-icons/fa";

import scss from './DiscoverPage.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchDiscoverMovie, fetchGenresMovie, fetchSearchMovie} from "../../store/slices/movie/asyncActions";
import {MovieCard, Pagination, Search, Sort} from "../../components";
import {changeDisabledBtn, changeSendRequest} from "../../store/slices/sort/sortSlice";
import {sort} from "../../utils/sortByMovie";
import {clearResponseSearchMovie} from "../../store/slices/movie/movieSlice";

const MovieDiscoverPage: FC = () => {

    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);

    const [isOpenSortComponent, setIsOpenSortComponent] = useState(false);
    const [isOpenContent, setIsOpenContent] = useState(true);


    const {
        responseDiscoverMovie,
        responseGenresMovie,
        responseSearchMovie
    } = useSelector((state: RootState) => state.movie);

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


    useEffect(() => {
        dispatch(fetchDiscoverMovie({
            page,
            minValueVoteAv,
            maxValueVoteAv,
            maxReleaseYear,
            minReleaseYear,
            genreId: genreSort.id,
            sortBy: sortBy.query
        }))
        dispatch(fetchGenresMovie())
        dispatch(changeSendRequest(false))
        dispatch(changeDisabledBtn(true))
        window.scrollTo(0, 0)

        if (searchValue === '') {
            dispatch(clearResponseSearchMovie())
        } else {
            dispatch(fetchSearchMovie({query: searchValue, page}))
        }

    }, [sendRequest, isResetBtn, page, searchValue])


    const totalPages = () => {
        for (let i in responseSearchMovie) {
            if (responseSearchMovie.hasOwnProperty(i)) {
                if (responseSearchMovie.total_pages < 500) {
                    return responseSearchMovie.total_pages
                } else {
                    return 500
                }
            }
        }
        if (responseDiscoverMovie.total_pages < 500) {
            return responseDiscoverMovie.total_pages
        } else {
            return 500
        }
    }

    const renderMovies = () => {
        for (let i in responseSearchMovie) {
            if (responseSearchMovie.hasOwnProperty(i)) {
                return responseSearchMovie.results?.map(movie => <MovieCard key={movie.id} {...movie}/>)
            }
        }
        return responseDiscoverMovie.results?.map(movie => <MovieCard key={movie.id} {...movie}/>)
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
                    <button
                        className={scss.filterBtn}
                        onClick={() => {
                            setIsOpenSortComponent(!isOpenSortComponent)
                            setIsOpenContent(!isOpenContent)
                        }}
                    >
                        <FaSortAmountDownAlt/>
                        Сортування
                    </button>
                </div>


                <div className={scss.container_content}>
                    {!searchValue &&
                        <Sort
                            genres={responseGenresMovie}
                            sort={sort}
                            setIsOpenSortComponent={setIsOpenSortComponent}
                            isOpenSortComponent={isOpenSortComponent}
                            isOpenContent={isOpenContent}
                            setIsOpenContent={setIsOpenContent}
                        />
                    }
                    <div className={scss.container_content_cards}>
                        {isOpenContent &&
                            renderMovies()
                        }
                    </div>
                </div>
                {isOpenContent &&
                    <Pagination totalPages={totalPages()} page={page} setPage={setPage}/>
                }
            </div>
        </div>
    );
}

export {MovieDiscoverPage};