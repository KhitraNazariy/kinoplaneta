import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {RootState, useAppDispatch} from "../../store/store";
import {fetchOnTheAirTv} from "../../store/slices/tv/asyncActions";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";
import {Loader, Pagination, TvCard} from "../../components";
import scss from "./MovieAndTvPages.module.scss";

const OnTheAirTvPage: FC = () => {

    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const {responseOnTheAirTv, error, status} = useSelector((state: RootState) => state.tv);

    useEffect(() => {
        dispatch(fetchOnTheAirTv({page: page}))
        window.scrollTo(0, 0)
    }, [page])

    const totalPages = () => {
        if (responseOnTheAirTv.total_pages < 500) {
            return responseOnTheAirTv.total_pages
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
                        <h2>Серіали зараз по телевізору</h2>
                        <p>Добірка серіалів усього світу</p>
                    </div>
                    <div className={scss.content_cards}>
                        {
                            Array.isArray(responseOnTheAirTv.results) &&
                            responseOnTheAirTv.results.map(tv => <TvCard key={tv.id} tv={tv}/>)
                        }
                    </div>
                </div>
                <Pagination totalPages={totalPages()} page={page} setPage={setPage}/>
            </div>
        </div>
    );
};

export {OnTheAirTvPage};