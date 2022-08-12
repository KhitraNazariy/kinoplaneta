import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import scss from './MoviePages.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {Loader, MovieCard, Pagination} from "../../components";
import {fetchPopularMovie} from "../../store/slices/movie/asyncActions";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";

const PopularMoviePage: FC = () => {

    const {responsePopularMovie, error, status} = useSelector((state: RootState) => state.movie);
    const dispatch = useAppDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchPopularMovie({page: page}))
        window.scrollTo(0, 0)
    }, [page])

    const totalPages = () => {
        if (responsePopularMovie.total_pages < 500) {
            return responsePopularMovie.total_pages
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
                        <h2>Популярні фільми</h2>
                        <p>Добірка фільмів усього світу</p>
                        <div className={scss.content_title_facts}>
                            <p>
                                Знаменитий бульвар Капуцинів в Парижі, де були показані перші фільми, виявляється,
                                називається «бульвар Капуцинок».
                            </p>
                            <p>
                                Режисер Алан Сміті (англ. Alan Smithee, Allen Smithee, Alan Smythee, або Adam Smithee) –
                                псевдонім, який використовується у випадках, коли режисер з тих чи інших причин
                                відмовляється вказувати своє ім’я в титрах.
                            </p>
                            <p>
                                Два роки розшукувала поліція предмети, вкрадені зі знімального майданчика телесеріалу
                                «Зоряний шлях», і їй вдалося повернути лише третина викраденого. Попутно був знайдений
                                костюм Бетмена, вкрадений раніше зі студії Warner Brothers.
                            </p>
                            <p>
                                У Північній Америці телефонні номери з префіксом в діапазоні від 555-0100 до 555-0199
                                спеціально відведені для вигаданого використання в телесеріалах, фільмах, комп’ютерних
                                іграх та інших художніх творах
                            </p>
                            <p>
                                Кіно дуже довго не мала твердого назви. У різних країнах і в різних шарах суспільства
                                його називали по-різному – «киномо-, хромо-, фоно-, мега-, скопограф», «ілюзіон»,
                                «кікі», «кинемоша» або «кинемошка». Єдине, що дожило до наших днів – це слово «кіношка».
                                А слово «кіно» прийшло з Німеччини.
                            </p>
                        </div>
                    </div>
                    <div className={scss.content_cards}>
                        {
                            Array.isArray(responsePopularMovie.results) &&
                            responsePopularMovie.results.map(movie => <MovieCard key={movie.id} {...movie}/>)
                        }
                    </div>
                </div>
                <Pagination totalPages={totalPages()} page={page} setPage={setPage}/>
            </div>
        </div>
    );
};

export {PopularMoviePage};
