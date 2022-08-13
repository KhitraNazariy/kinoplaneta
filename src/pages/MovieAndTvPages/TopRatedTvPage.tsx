import React, {FC, useEffect, useState} from 'react';
import {RootState, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import {fetchTopRatedTv} from "../../store/slices/tv/asyncActions";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";
import {Loader, Pagination} from "../../components";
import scss from "./MovieAndTvPages.module.scss";
import {TvCard} from "../../components/Cards/TvCard";

const TopRatedTvPage: FC = () => {

    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const {responseTopRatedTv, error, status} = useSelector((state: RootState) => state.tv);

    useEffect(() => {
        dispatch(fetchTopRatedTv({page: page}))
        window.scrollTo(0, 0)
    }, [page])

    const totalPages = () => {
        if (responseTopRatedTv.total_pages < 500) {
            return responseTopRatedTv.total_pages
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
                        <h2>Серіали в ефірі</h2>
                        <p>Добірка серіалів усього світу</p>
                    </div>
                    <div className={scss.content_cards}>
                        {
                            Array.isArray(responseTopRatedTv.results) &&
                            responseTopRatedTv.results.map(tv => <TvCard key={tv.id} {...tv}/>)
                        }
                    </div>
                </div>
                <Pagination totalPages={totalPages()} page={page} setPage={setPage}/>
            </div>
        </div>
    );
};

export {TopRatedTvPage};