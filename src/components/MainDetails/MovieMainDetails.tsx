import React, {FC} from 'react';
import {BsFillPlayFill} from "react-icons/bs";
import {MdOutlineBookmarkAdded} from "react-icons/md";

import scss from './MainDetails.module.scss';
import {URL_IMG} from "../../configs";
import {IMovieDetails} from "../../types/IMovieDetails";
import {getDate} from "../../utils/getDate";
import {getColorForRating} from "../../utils/getColorForRating";
import {getYear} from "../../utils/getYear";

interface IMovieMainDetailsProps {
    data: IMovieDetails
}

const MovieMainDetails: FC<IMovieMainDetailsProps> = ({data}) => {

    console.log(data.backdrop_path)

    return (
        <div className={scss.details} style={{backgroundImage: `url(${URL_IMG}${data.backdrop_path})`}}>
            <div className={scss.details_inner}>
                <img src={`${URL_IMG}${data.poster_path}`} alt={data.title}/>
                <div className={scss.content}>
                    <div className={scss.content_title}>
                        <h2>{data.title} ({getYear(data.release_date)})</h2>
                        <p>{data.original_title}</p>
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
                                <p>Бюджет</p>
                                <p>Тривалість</p>
                                <p>Дохід</p>
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
                                <p>{data.budget ? `$ ${data.budget}` : '—'}</p>
                                <p>{data.runtime ? data.runtime : '—'} хв</p>
                                <p>{data.revenue ? `$ ${data.revenue}` : '—'}</p>
                                <p>{data.release_date ? getDate(data.release_date) : '—'}</p>
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

export {MovieMainDetails};