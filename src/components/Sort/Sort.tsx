import React, {FC, useState} from 'react';
import {useSelector} from "react-redux";

import scss from './Sort.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {changeSendRequest, resetBtn, setGenre, setSortBy} from "../../store/slices/sort/sortSlice";
import {SortRating} from "../UI";
import {SortYear} from "../UI/SortItems/SortYear";
import {IGenres} from "../../types/IGenres";
import {IoIosArrowDown} from "react-icons/io";
import {ISortItem} from "../../types/ISortItem";


interface SortProps {
    genres: IGenres
    sort: ISortItem[]
}

const Sort: FC<SortProps> = ({genres, sort}) => {

    const {
        maxValueVoteAv,
        minValueVoteAv,
        disabledBtn,
        minReleaseYear,
        maxReleaseYear,
        genreSort,
        sortBy,
    } = useSelector((state: RootState) => state.sort);
    const dispatch = useAppDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSort, setIsOpenSort] = useState(false);

    return (
        <div className={scss.sort}>
            <div className={scss.sort_info}>
                <div className={scss.sort_info_item}>Рейтинг: {minValueVoteAv} - {maxValueVoteAv}</div>
                <div className={scss.sort_info_item}>Дата виходу: {minReleaseYear} - {maxReleaseYear}</div>
                <div className={scss.sort_info_item}>Жанр: {genreSort.name === '' ? 'Всі жанри' : genreSort.name}</div>
                <div className={scss.sort_info_item}>Сорт: {sortBy.name}</div>
            </div>
            <div className={scss.sort_items}>
                <div className={scss.genres}>
                    <h2 className={scss.genres_title}>Сортувати результат за</h2>
                    <h3
                        className={scss.genres_name}
                        onClick={() => setIsOpenSort(!isOpenSort)}
                    >
                        {sortBy.name}
                        <IoIosArrowDown/>
                    </h3>
                    <div
                        style={{display: isOpenSort ? 'block' : 'none', height: '200px', zIndex: '10'}}
                        className={scss.genres_list}
                    >
                        {sort.map((item, index) => (
                                <div
                                    style={{
                                        backgroundColor: sortBy.name === item.name ? '#005382' : '',
                                        color: sortBy.name === item.name ? '#FFFFFF' : ''
                                    }}
                                    className={scss.item}
                                    onClick={() => {
                                        dispatch(setSortBy(item))
                                        setIsOpenSort(!isOpenSort)
                                    }}
                                    key={index}
                                >
                                    {item.name}
                                </div>
                            )
                        )}
                    </div>
                </div>
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
