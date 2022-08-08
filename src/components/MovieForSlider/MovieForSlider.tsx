import React, {FC} from 'react';

import scss from './MovieForSlider.module.scss';
import {IMovie} from "../../types/IMovie";
import {URL_IMG} from "../../configs";
import {getDate} from "../../utils/getDate";
import {getColorForRating} from "../../utils/getColorForRating";

const MovieForSlider: FC<IMovie> = (
    {
        poster_path,
        title,
        release_date,
        vote_average
    }
) => {


    return (
        <div className={scss.movieSliderCard}>
            <p className={scss.movieSliderCard_voteAverage} style={{backgroundColor: `${getColorForRating(vote_average)}`}}>{vote_average}</p>
            <img src={`${URL_IMG}${poster_path}`} alt={title}/>
            <div className={scss.movieSliderCard_description}>
                <h3>{title}</h3>
                <p>{getDate(release_date)}</p>
            </div>
        </div>
    );
};

export {MovieForSlider};