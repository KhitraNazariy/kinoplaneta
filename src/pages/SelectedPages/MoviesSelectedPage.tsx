import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";
import {AiOutlineClear} from "react-icons/ai";

import scss from './SelectedPage.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {SelectedMovieCard} from "../../components";
import {clearSelectedMovie} from "../../store/slices/movie/movieSlice";

const MoviesSelectedPage: FC = () => {

    const {selectedMovies} = useSelector((state: RootState) => state.movie);

    const dispatch = useAppDispatch();

    useEffect(() => {

    },[selectedMovies])

    return (
        <div className={scss.container}>
            <h2>Обрані фільми</h2>
            {!selectedMovies.length && <div className={scss.empty}>Список обраних фільмів пустий</div>}
            {selectedMovies.length > 0 &&
                <button
                    className={scss.clearBtn}
                    onClick={() => dispatch(clearSelectedMovie())}
                >
                    <AiOutlineClear size={21}/>
                    Очистити список
                </button>
            }
            {selectedMovies.map(movie => <SelectedMovieCard key={movie.id} {...movie}/>)}
        </div>
    );
};

export {MoviesSelectedPage};