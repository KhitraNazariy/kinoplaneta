import React, {FC} from 'react';
import {Link} from "react-router-dom";

import scss from './SliderCard.module.scss';
import {IMovie} from "../../types/IMovie";
import {URL_IMG} from "../../configs";
import {getDate} from "../../utils/getDate";
import {getColorForRating} from "../../utils/getColorForRating";

const MovieForSlider: FC<IMovie> = (
    {
        poster_path,
        title,
        release_date,
        vote_average,
        id
    }
) => {


    return (
        <div className={scss.sliderCard}>
            <p
                className={scss.sliderCard_voteAverage}
                style={{backgroundColor: `${getColorForRating(vote_average)}`}}
            >
                {vote_average}
            </p>
            <Link to={`movie/${id.toString()}`}>
                <img src={`${URL_IMG}${poster_path}`} alt={title}/>
            </Link>
            <div className={scss.sliderCard_description}>
                <Link to={`movie/${id.toString()}`}>
                    <h3>{title}</h3>
                </Link>
                <p>{getDate(release_date)}</p>
            </div>
        </div>
    );
};

export {MovieForSlider};