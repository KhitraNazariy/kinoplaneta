import React, {FC} from 'react';
import {BsFillPlayFill} from "react-icons/bs";
import {MdOutlineBookmarkAdded} from "react-icons/md";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

import scss from './MainDetails.module.scss';
import {URL_IMG} from "../../configs";
import {IMovieDetails} from "../../types/IMovieDetails";
import {getDate} from "../../utils/getDate";
import {getColorForRating} from "../../utils/getColorForRating";
import {getYear} from "../../utils/getYear";
import {useAppDispatch} from "../../store/store";
import {addSelectedMovie} from "../../store/slices/movie/movieSlice";

interface IMovieMainDetailsProps {
    data: IMovieDetails
}

const MovieMainDetails: FC<IMovieMainDetailsProps> = ({data}) => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    return (
        <div className={scss.details} style={{backgroundImage: `url(${URL_IMG}${data.backdrop_path})`}}>
            <div className={scss.details_inner}>
                <button
                    onClick={() => navigate(-1)}
                    className={scss.goBack}
                >
                    <AiOutlineArrowLeft/>Назад
                </button>
                <img src={`${URL_IMG}${data.poster_path}`} alt={data.title}/>
                <div className={scss.content}>
                    <div className={scss.content_title}>
                        <h2>{data.title} ({getYear(data.release_date)})</h2>
                        <p>{data.original_title}</p>
                    </div>
                    <div className={scss.content_buttons}>
                        <button
                            className={scss.content_buttons_watch}
                        >
                            <BsFillPlayFill size={19}/>Дивитись трейлер
                        </button>
                        <button
                            className={scss.content_buttons_add}
                            onClick={() => dispatch(addSelectedMovie(data))}
                        >
                            <MdOutlineBookmarkAdded size={19}/>Буду дивитись
                        </button>
                    </div>
                    <div className={scss.content_about}>
                        <h3>Про фільм</h3>
                        <ul className={scss.content_about_info}>
                            <li className={scss.item}>
                                <span className={scss.item_key}>Жанр</span>
                                <span className={scss.item_value}>
                                    {
                                        data.genres?.map((genre, index) =>
                                            <span key={genre.id}>
                                            {(index ? ', ' : '') + genre.name.toLowerCase()}
                                        </span>)
                                    }
                                </span>
                            </li>
                            <li className={scss.item}>
                                <span className={scss.item_key}>Слоган</span>
                                <span className={scss.item_value}>
                                    {data.tagline ? data.tagline : '—'}
                                </span>
                            </li>
                            <li className={scss.item}>
                                <span className={scss.item_key}>Бюджет</span>
                                <span className={scss.item_value}>
                                    {data.budget ? `$ ${data.budget}` : '—'}
                                </span>
                            </li>
                            <li className={scss.item}>
                                <span className={scss.item_key}>Тривалість</span>
                                <span className={scss.item_value}>
                                    {data.runtime ? `${data.runtime} хв` : '—'}
                                </span>
                            </li>
                            <li className={scss.item}>
                                <span className={scss.item_key}>Дохід</span>
                                <span className={scss.item_value}>
                                    {data.revenue ? `$ ${data.revenue}` : '—'}
                                </span>
                            </li>
                            <li className={scss.item}>
                                <span className={scss.item_key}>Прем'єра у світі</span>
                                <span className={scss.item_value}>
                                    {data.release_date ? getDate(data.release_date) : '—'}
                                </span>
                            </li>
                            <li className={scss.item}>
                                <span className={scss.item_key}>Оцінка користувачів</span>
                                <span
                                    className={scss.item_value}
                                    style={
                                        {
                                            color: `${getColorForRating(data.vote_average)}`,
                                            fontWeight: '600'
                                        }
                                    }
                                >
                                    {data.vote_average}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MovieMainDetails};