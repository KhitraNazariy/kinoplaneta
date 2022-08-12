import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import scss from './MoviePages.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchNowPlayingMovie} from "../../store/slices/movie/asyncActions";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";
import {Loader, MovieCard, Pagination} from "../../components";

const NowPlayingMoviePage: FC = () => {

    const {responseNowPlayingMovie, status, error} = useSelector((state: RootState) => state.movie);
    const dispatch = useAppDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchNowPlayingMovie({page: page}))
        window.scrollTo(0, 0)
    }, [page])

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
                        <h2>Фільми в кінотеатрах</h2>
                        <p>Добірка фільмів усього світу</p>
                        <div className={scss.content_title_facts}>
                            <p>
                                У багатьох американських фільмах і серіалах згадується Acme Corporation (A Company
                                Making Everything)- Фірма, яка робить все, що завгодно. Є 2GAT123 – вигаданий
                                автомобільний номер; Channel 37 – вигадана телевізійна станція; Heisler Beer – вигадана
                                марка пива; Hobbs End – вигадана місцевість; Морлі – вигадана марка сигарет; Oceanic
                                Airlines – вигадана авіакомпанія…
                            </p>
                            <p>
                                Сама запам’ятовується кинофраза всіх часів «i’ll be back» з к/ф «Термінатор», 1984 року.
                            </p>
                            <p>
                                Перші кінокартини іноді супроводжувалися дуже цікавими курйозами. Коли свій перший
                                кінотеатр відкрили знамениті брати Ворнери, їм доводилося брати стільці для глядачів у
                                похоронному бюро: вранці на них голосили родичі покійних, а ввечері публіка дивилася
                                фільм.
                            </p>
                            <p>
                                Найпопулярніший герой фільму – Шерлок Холмс (він був екранізований 200 раз)
                            </p>
                            <p>
                                Найдорожчий фільм в історії кіно. Це «Зоряні війни. Епізод 1», на його зйомки було
                                витрачено 115 млн. доларів.
                            </p>
                        </div>
                    </div>
                    <div className={scss.content_cards}>
                        {
                            Array.isArray(responseNowPlayingMovie.results) &&
                            responseNowPlayingMovie.results.map(movie => <MovieCard key={movie.id} {...movie}/>)
                        }
                    </div>
                </div>
                <Pagination totalPages={500} page={page} setPage={setPage}/>
            </div>
        </div>
    );
};

export {NowPlayingMoviePage};