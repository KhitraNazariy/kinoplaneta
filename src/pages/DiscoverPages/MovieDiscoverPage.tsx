import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import scss from './MovieDiscoverPage.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchDiscoverMovie} from "../../store/slices/movie/asyncActions";
import {Loader, MovieCard, Search, Sort} from "../../components";
import {changeSendRequest} from "../../store/slices/sort/sortSlice";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";

const MovieDiscoverPage: FC = () => {

    const dispatch = useAppDispatch();
    const {responseDiscoverMovie, error, status} = useSelector((state: RootState) => state.movie);
    const {minValueVoteAv, maxValueVoteAv, sendRequest} = useSelector((state: RootState) => state.sort);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        dispatch(fetchDiscoverMovie({page: 1, minValueVoteAv, maxValueVoteAv}))
        dispatch(changeSendRequest(false))
    },[sendRequest])

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
                    <Sort/>
                    <div className={scss.container_content_cards}>
                        {
                            Array.isArray(responseDiscoverMovie.results) &&
                            responseDiscoverMovie.results.map(movie => <MovieCard key={movie.id} {...movie}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export {MovieDiscoverPage};