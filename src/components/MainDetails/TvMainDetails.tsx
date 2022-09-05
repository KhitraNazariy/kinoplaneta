import React, {FC} from 'react';
import {BsFillPlayFill} from "react-icons/bs";
import {MdOutlineBookmarkAdded} from "react-icons/md";

import {ITvDetails} from "../../types/ITvDetails";
import scss from "./MainDetails.module.scss";
import {URL_IMG} from "../../configs";
import {getYear} from "../../utils/getYear";
import {getDate} from "../../utils/getDate";
import {getColorForRating} from "../../utils/getColorForRating";

interface ITvMainDetailsProps {
    data: ITvDetails;
}

const TvMainDetails: FC<ITvMainDetailsProps> = ({data}) => {

    return (
        <div className={scss.details} style={{backgroundImage: `url(${URL_IMG}${data.backdrop_path})`}}>
            <div className={scss.details_inner}>
                <img src={`${URL_IMG}${data.poster_path}`} alt={data.name}/>
                <div className={scss.content}>
                    <div className={scss.content_title}>
                        <h2>{data.name} ({getYear(data.first_air_date)})</h2>
                        <p>{data.original_name}</p>
                    </div>
                    <div className={scss.content_buttons}>
                        <button className={scss.content_buttons_watch}><BsFillPlayFill size={19}/>Дивитись трейлер
                        </button>
                        <button className={scss.content_buttons_add}><MdOutlineBookmarkAdded size={19}/>Буду дивитись
                        </button>
                    </div>
                    <div className={scss.content_about}>
                        <h3>Про серіал</h3>
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
                                <span className={scss.item_key}>Тривалість серії</span>
                                <span className={scss.item_value}>
                                   {data.episode_run_time ? `${data.episode_run_time[0]} хв` : '—'}
                                </span>
                            </li>
                            <li className={scss.item}>
                                <span className={scss.item_key}>Кількість серій</span>
                                <span className={scss.item_value}>
                                    {data.number_of_episodes ? data.number_of_episodes : '—'}
                                </span>
                            </li>
                            <li className={scss.item}>
                                <span className={scss.item_key}>Кількість сезонів</span>
                                <span className={scss.item_value}>
                                    {data.number_of_seasons ? data.number_of_seasons : '—'}
                                </span>
                            </li>
                            <li className={scss.item}>
                                <span className={scss.item_key}>Прем'єра у світі</span>
                                <span className={scss.item_value}>
                                    {data.first_air_date ? getDate(data.first_air_date) : '—'}
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

export {TvMainDetails};