import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './MainSections.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchPopularTv} from "../../store/slices/tv/asyncActions";
import {TvMainCard} from "../MainCards";


const PopularTvSection: FC = () => {

    const {responsePopularTv} = useSelector((state: RootState) => state.tv);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPopularTv())
    },[])

    return (
        <section className={scss.section}>
            <div className={scss.section_title}>
                <h2>Популярні серіали</h2>
                <button>Дивитись всі</button>
            </div>
            <div className={scss.section_movies}>
                {
                    Array.isArray(responsePopularTv.results) &&
                    responsePopularTv.results.slice(0, 10).map(tv => <TvMainCard key={tv.id} {...tv}/>)
                }
            </div>
        </section>
    );
};

export {PopularTvSection};