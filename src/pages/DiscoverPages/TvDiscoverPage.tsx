import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {FaSortAmountDownAlt} from "react-icons/fa";

import {RootState, useAppDispatch} from "../../store/store";
import {changeDisabledBtn, changeSendRequest} from "../../store/slices/sort/sortSlice";
import scss from "./DiscoverPage.module.scss";
import {Pagination, Search, Sort, TvCard} from "../../components";
import {fetchDiscoverTv, fetchSearchTv, fetchTvGenres} from "../../store/slices/tv/asyncActions";
import {sort} from "../../utils/sortByTv";
import {clearResponseSearchTv} from "../../store/slices/tv/tvSlice";


const TvDiscoverPage: FC = () => {

    const dispatch = useAppDispatch();

    const [isOpenSortComponent, setIsOpenSortComponent] = useState(false);
    const [isOpenContent, setIsOpenContent] = useState(true);

    const {
        responseDiscoverTv,
        responseGenresTv,
        responseSearchTv
    } = useSelector((state: RootState) => state.tv);

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
        dispatch(fetchDiscoverTv({
            page,
            minValueVoteAv,
            maxValueVoteAv,
            maxReleaseYear,
            minReleaseYear,
            genreId: genreSort.id,
            sortBy: sortBy.query
        }))
        window.scrollTo(0, 0)

        if (searchValue === '') {
            dispatch(clearResponseSearchTv())
        } else {
            dispatch(fetchSearchTv({query: searchValue, page}))
        }

    },[sendRequest, isResetBtn, page, searchValue])

    const totalPages = () => {
        for (let i in responseSearchTv) {
            if (responseSearchTv.hasOwnProperty(i)) {
                if (responseSearchTv.total_pages < 500) {
                    return responseSearchTv.total_pages
                } else {
                    return 500
                }
            }
        }
        if (responseDiscoverTv.total_pages < 500) {
            return responseDiscoverTv.total_pages
        } else {
            return 500
        }
    }

    const renderTvs = () => {
        for (let i in responseSearchTv) {
            if (responseSearchTv.hasOwnProperty(i)) {
                return responseSearchTv.results?.map(tv => <TvCard key={tv.id} tv={tv}/>)
            }
        }
        return responseDiscoverTv.results?.map(tv => <TvCard key={tv.id} tv={tv}/>)
    }

    return (
        <div className={scss.wrap}>
            <div
                className={scss.container}
                style={{minHeight: window.screen.height}}
            >
                <div className={scss.container_header}>
                    <div className={scss.container_header_title}>
                        <h2>Всі фільми</h2>
                        <p>Добірка фільмів всього світу</p>
                    </div>
                    <Search
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        placeholder={'Пошук серіалів...'}
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
                            genres={responseGenresTv}
                            sort={sort}
                            setIsOpenSortComponent={setIsOpenSortComponent}
                            isOpenSortComponent={isOpenSortComponent}
                            isOpenContent={isOpenContent}
                            setIsOpenContent={setIsOpenContent}
                        />
                    }
                    <div className={scss.container_content_cards}>
                        {isOpenContent &&
                            renderTvs()
                        }
                    </div>
                </div>
                {isOpenContent && responseSearchTv.total_pages !== 0 &&
                    <Pagination totalPages={totalPages()} page={page} setPage={setPage}/>
                }
            </div>
        </div>
    );
}

export {TvDiscoverPage};