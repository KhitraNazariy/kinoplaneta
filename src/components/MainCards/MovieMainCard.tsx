import React, {FC} from 'react';

import scss from './MainCard.module.scss';
import {IMovie} from "../../types/IMovie";
import {URL_IMG} from "../../configs";
import {getDate} from "../../utils/getDate";
import {getColorForRating} from "../../utils/getColorForRating";

const MovieMainCard: FC<IMovie> = ({title, release_date, vote_average, poster_path}) => {

    return (
        <div className={scss.movieCard}>
            <p className={scss.movieCard_voteAverage} style={{backgroundColor: `${getColorForRating(vote_average)}`}}>{vote_average}</p>
            <img src={`${URL_IMG}${poster_path}`} alt={title}/>
            <div className={scss.movieCard_description}>
                <h3>{title}</h3>
                <p>{getDate(release_date)}</p>
            </div>
        </div>
    );
};

export {MovieMainCard};