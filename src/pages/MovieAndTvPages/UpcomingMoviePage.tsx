import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import scss from './MovieAndTvPages.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchUpcomingMovie} from "../../store/slices/movie/asyncActions";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";
import {Loader, MovieCard, Pagination} from "../../components";

const UpcomingMoviePage: FC = () => {

    const dispatch = useAppDispatch();
    const {responseUpcomingMovie, status, error} = useSelector((state: RootState) => state.movie);

    const [page, setPage] = useState(1);

    const totalPages = () => {
      if (responseUpcomingMovie.total_pages < 500) {
          return responseUpcomingMovie.total_pages
      } else {
          return 500
      }
    }

    useEffect(() => {
        dispatch(fetchUpcomingMovie({page: page}))
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
                        <h2>Очікувані фільми</h2>
                        <p>Добірка фільмів усього світу</p>
                        <div className={scss.content_title_facts}>
                            <p>
                                У середньому дохід від продажу супутніх товарів у фільму в п’ять разів більше, ніж
                                прибуток від кінопрокату
                            </p>
                            <p>
                                У 1939 році в Голлівуді випускали фільми, як гарячі пиріжки. В середньому виходило по
                                два нових фільми в день.
                            </p>
                            <p>
                                Країна, в якій на даний момент знімається найбільше фільмів – це Індія. Не знаю, як вони
                                це роблять, але в Індії щороку знімається близько семисот п’ятдесяти художніх фільмів,
                                тобто по 2 фільми в день.
                            </p>
                            <p>
                                Відома кінська голова з фільму «Хрещений батько» була справжнісінька – продюсер отримав
                                її в компанії, що виробляє собачий корм.
                            </p>
                            <p>
                                Модель Годзілли, використаний у зйомках однойменного фільму, важить 100 кілограмів, і
                                зроблена з уретану і бамбука.
                            </p>
                        </div>
                    </div>
                    <div className={scss.content_cards}>
                        {
                            Array.isArray(responseUpcomingMovie.results) &&
                            responseUpcomingMovie.results.map(movie => <MovieCard key={movie.id} {...movie}/>)
                        }
                    </div>
                </div>
                <Pagination totalPages={totalPages()} page={page} setPage={setPage}/>
            </div>
        </div>
    );
};

export {UpcomingMoviePage};