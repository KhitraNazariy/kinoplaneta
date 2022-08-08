import React, {FC} from 'react';

import scss from './MovieMainBlock.module.scss';
import {IMovie} from "../../types/IMovie";
import {URL_IMG} from "../../configs";
import {getDate} from "../../utils/getDate";
import {getColorForRating} from "../../utils/getColorForRating";

const MovieMainBlock: FC<IMovie> = ({title, release_date, vote_average, poster_path}) => {

    console.log(release_date)

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

export {MovieMainBlock};