import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import scss from './MovieAndTvPages.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {Loader, Pagination} from "../../components";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";
import {fetchPopularTv} from "../../store/slices/tv/asyncActions";
import {TvCard} from "../../components/Cards/TvCard";

const PopularTvPage: FC = () => {

    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const {responsePopularTv, error, status} = useSelector((state: RootState) => state.tv);

    useEffect(() => {
        dispatch(fetchPopularTv({page: page}))
        window.scrollTo(0, 0)
    }, [page])

    const totalPages = () => {
        if (responsePopularTv.total_pages < 500) {
            return responsePopularTv.total_pages
        } else {
            return 500
        }
    }

    if (error) {
        return <BadRequestPage/>
    }

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <div className={scss.wrap}>
            <div className={scss.content}>
                <div style={{flexDirection: 'column'}} className={scss.content_wrap}>
                    <div className={scss.content_title}>
                        <h2>Популярні серіали</h2>
                        <p>Добірка серіалів усього світу</p>
                    </div>
                    <div className={scss.content_cards}>
                        {
                            Array.isArray(responsePopularTv.results) &&
                            responsePopularTv.results.map(tv => <TvCard key={tv.id} {...tv}/>)
                        }
                    </div>
                </div>
                <Pagination totalPages={totalPages()} page={page} setPage={setPage}/>
            </div>
        </div>
    );
};

export {PopularTvPage};
