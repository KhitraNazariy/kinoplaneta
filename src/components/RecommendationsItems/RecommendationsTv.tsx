import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {ITv} from "../../types/ITv";
import scss from "./RecommendationsItems.module.scss";
import {getColorForRating} from "../../utils/getColorForRating";
import {URL_IMG} from "../../configs";
import {getDate} from "../../utils/getDate";

const RecommendationsTv: FC<ITv> = ({vote_average, id, poster_path, name, first_air_date}) => {
    return (
        <div className={scss.sliderCard}>
            <p
                className={scss.sliderCard_voteAverage}
                style={{backgroundColor: `${getColorForRating(vote_average)}`}}
            >
                {vote_average}
            </p>
            <Link to={`/tv/${id.toString()}`}>
                <img src={`${URL_IMG}${poster_path}`} alt={name}/>
            </Link>
            <div className={scss.sliderCard_description}>
                <Link to={`/tv/${id.toString()}`}>
                    <h3>{name}</h3>
                </Link>
                <p>{getDate(first_air_date)}</p>
            </div>
        </div>
    );
};

export {RecommendationsTv};