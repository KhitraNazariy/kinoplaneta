import React, {FC, useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";

import scss from './Sort.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {changeSendRequest, resetBtn, setGenre, setPrimaryReleaseDate} from "../../store/slices/sort/sortSlice";
import {SortRating} from "../UI";
import {SortYear} from "../UI/SortItems/SortYear";
import {IGenres} from "../../types/IGenres";
import {IoIosArrowDown} from "react-icons/io";

interface SortProps {
    genres: IGenres
}

const Sort: FC<SortProps> = ({genres}) => {

    const [isOpen, setIsOpen] = useState(false);

    const {
        maxValueVoteAv,
        minValueVoteAv,
        disabledBtn,
        minReleaseYear,
        maxReleaseYear,
        genreSort,
        primaryReleaseDate
    } = useSelector((state: RootState) => state.sort);
    const dispatch = useAppDispatch();

    return (
        <div className={scss.sort}>
            <div className={scss.sort_info}>
                <div className={scss.sort_info_item}>Рейтинг: {minValueVoteAv} - {maxValueVoteAv}</div>
                <div className={scss.sort_info_item}>Дата виходу: {minReleaseYear} - {maxReleaseYear}</div>
                <div className={scss.sort_info_item}>Жанр: {genreSort.name === '' ? 'Всі жанри' : genreSort.name}</div>
                <div className={scss.sort_info_item}>Дата виходу: {primaryReleaseDate === 'desc' ? 'Спочатку нові' : 'Спочатку старі'}</div>
            </div>
            <div className={scss.sort_items}>
                <SortRating/>
                <SortYear/>
                <div className={scss.genres}>
                    <h2 className={scss.genres_title}>Жанри</h2>
                    <h3
                        className={scss.genres_name}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {genreSort.name === '' ? 'Всі жанри' : genreSort.name}
                        <IoIosArrowDown/>
                    </h3>
                    <div
                        style={{display: isOpen ? 'block' : 'none'}}
                        className={scss.genres_list}
                    >
                        {genres.genres?.map(genre => (
                                <div
                                    style={{
                                        backgroundColor: genreSort.name === genre.name ? '#005382' : '',
                                        color: genreSort.name === genre.name ? '#FFFFFF' : ''
                                    }}
                                    className={scss.item}
                                    onClick={() => {
                                        dispatch(setGenre(genre))
                                        setIsOpen(!isOpen)
                                    }}
                                    key={genre.id}
                                >
                                    {genre.name}
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className={scss.releaseYear}>
                    <h2>Рік виходу</h2>
                    <form action="#">
                        <p>
                            <input
                                type="radio"
                                id="test1"
                                name="radio-group"
                                checked={primaryReleaseDate === 'desc'}
                                onClick={() => dispatch(setPrimaryReleaseDate('desc'))}
                                readOnly={true}
                            />
                            <label htmlFor="test1">Спочатку нові</label>
                        </p>
                        <p>
                            <input
                                type="radio"
                                id="test2"
                                name="radio-group"
                                checked={primaryReleaseDate === 'asc'}
                                onClick={() => dispatch(setPrimaryReleaseDate('asc'))}
                                readOnly={true}
                            />
                            <label htmlFor="test2">Спочатку старі</label>
                        </p>
                    </form>
                </div>
            </div>
            <div className={scss.sort_buttons}>
                <div>
                    <button
                        style={{backgroundColor: disabledBtn ? 'silver' : '', cursor: disabledBtn ? 'default' : ''}}
                        className={scss.sort_buttons_apply}
                        onClick={() => dispatch(changeSendRequest(true))}

                    >
                        Застосувати
                    </button>
                </div>
                <div>
                    <button
                        className={scss.sort_buttons_reset}
                        onClick={() => dispatch(resetBtn(true))}
                    >
                        Скинути
                    </button>
                </div>
            </div>
        </div>
    );
};

export {Sort};
