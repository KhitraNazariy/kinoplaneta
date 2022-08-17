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
                        <button className={scss.content_buttons_watch}><BsFillPlayFill size={19}/>Дивитись трейлер</button>
                        <button className={scss.content_buttons_add}><MdOutlineBookmarkAdded size={19}/>Буду дивитись</button>
                    </div>
                    <div className={scss.content_about}>
                        <h3>Про фільм</h3>
                        <div className={scss.row}>
                            <div className={scss.column}>
                                <p>Жанр</p>
                                <p>Слоган</p>
                                <p>Тривалість серії</p>
                                <p>Кількість серій</p>
                                <p>Кількість сезонів</p>
                                <p>Прем'єра у світі</p>
                                <p>Оцінка користувачів</p>
                            </div>
                            <div className={scss.column}>
                                <p>
                                    {
                                        data.genres?.map((genre, index) =>
                                            <span key={genre.id}>
                                            { (index ? ', ' : '') + genre.name.toLowerCase() }
                                        </span> )
                                    }
                                </p>
                                <p>{data.tagline ? data.tagline : '—'}</p>
                                <p>{data.episode_run_time ? `${data.episode_run_time[0]} хв` : '—'}</p>
                                <p>{data.number_of_episodes ? data.number_of_episodes : '—'}</p>
                                <p>{data.number_of_seasons ? data.number_of_seasons : '—'}</p>
                                <p>{data.first_air_date ? getDate(data.first_air_date) : '—'}</p>
                                <p style={{color: `${getColorForRating(data.vote_average)}`, fontWeight: '600'}}>
                                    {data.vote_average}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {TvMainDetails};