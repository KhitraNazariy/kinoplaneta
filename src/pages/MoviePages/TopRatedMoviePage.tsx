import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import scss from './MoviePages.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchTopRatedMovie} from "../../store/slices/movie/asyncActions";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";
import {Loader, MovieCard, Pagination} from "../../components";

const TopRatedMoviePage: FC = () => {

    const dispatch = useAppDispatch();
    const {responseTopRatedMovie, error, status} = useSelector((state: RootState) => state.movie);

    const [page, setPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchTopRatedMovie({page: page}))
    }, [page])

    const totalPages = () => {
        if (responseTopRatedMovie.total_pages < 500) {
            return responseTopRatedMovie.total_pages
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
                <div className={scss.content_wrap}>
                    <div className={scss.content_title}>
                        <h2>Рейтингові фільми</h2>
                        <p>Добірка фільмів усього світу</p>
                        <div className={scss.content_title_facts}>
                            <p>
                                Ума Турман відмовилася від ролі у фільмі «Кримінальне чтиво» (1994), але Квентін
                                Тарантіно прочитав їй сценарій по телефону, і вона поміняла свою думку
                            </p>
                            <p>
                                У фільмі «Люди в чорному» на роль суперагента у виконанні Уілла Сміта спочатку
                                запрошували Кріса о’доннела, але він відмовився
                            </p>
                            <p>
                                Первісна назва знаменитого ТВ-шоу «Друзі» – «Бессонное кафе»
                            </p>
                            <p>
                                Після виходу в 1959 році фільму «В джазі тільки дівчата» його показ був заборонений в
                                штаті
                            </p>
                            <p>
                                Канзас. Причина – зайва відвертість сцени з Мерилін Монро, Тоні Куртисом, а також їх
                                взаємне перевдягання
                            </p>
                        </div>
                    </div>
                    <div className={scss.content_cards}>
                        {
                            Array.isArray(responseTopRatedMovie.results) &&
                            responseTopRatedMovie.results.map(movie => <MovieCard key={movie.id} {...movie}/>)
                        }
                    </div>
                </div>
                <Pagination totalPages={totalPages()} page={page} setPage={setPage}/>
            </div>
        </div>
    );
};

export {TopRatedMoviePage};