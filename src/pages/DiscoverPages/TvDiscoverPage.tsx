import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {RootState, useAppDispatch} from "../../store/store";
import {changeDisabledBtn, changeSendRequest} from "../../store/slices/sort/sortSlice";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";
import scss from "./MovieDiscoverPage.module.scss";
import {Pagination, Search, Sort} from "../../components";
import {TvCard} from "../../components/Cards/TvCard";
import {fetchDiscoverTv, fetchTvGenres} from "../../store/slices/tv/asyncActions";
import {sort} from "../../utils/sortByTv";


const TvDiscoverPage: FC = () => {
    const dispatch = useAppDispatch();
    const {responseDiscoverTv, error, responseGenresTv} = useSelector((state: RootState) => state.tv);

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
        dispatch(fetchTvGenres())
        dispatch(changeSendRequest(false))
        dispatch(changeDisabledBtn(true))
        dispatch(fetchDiscoverTv({page: 1, minValueVoteAv, maxValueVoteAv, maxReleaseYear, minReleaseYear, genreId: genreSort.id, sortBy: sortBy.query}))
        window.scrollTo(0, 0)

    },[sendRequest, isResetBtn])

    const totalPages = () => {
        if (responseDiscoverTv.total_pages < 500) {
            return responseDiscoverTv.total_pages
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
                        genres={responseGenresTv}
                        sort={sort}
                    />
                    <div className={scss.container_content_cards}>
                        {
                            Array.isArray(responseDiscoverTv.results) &&
                            responseDiscoverTv.results.map(tv => <TvCard key={tv.id} {...tv}/>)
                        }
                    </div>
                </div>
                <Pagination totalPages={totalPages()} page={page} setPage={setPage}/>
            </div>
        </div>
    );
}

export {TvDiscoverPage};