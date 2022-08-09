import React, {FC} from 'react';

import {ITv} from "../../types/ITv";
import scss from "./MainCard.module.scss";
import {getColorForRating} from "../../utils/getColorForRating";
import {URL_IMG} from "../../configs";
import {getDate} from "../../utils/getDate";

const TvMainCard: FC<ITv> = ({poster_path, vote_average, name, first_air_date}) => {
    return (
        <div className={scss.movieCard}>
            <p className={scss.movieCard_voteAverage} style={{backgroundColor: `${getColorForRating(vote_average)}`}}>{vote_average}</p>
            <img src={`${URL_IMG}${poster_path}`} alt={name}/>
            <div className={scss.movieCard_description}>
                <h3>{name}</h3>
                <p>{getDate(first_air_date)}</p>
            </div>
        </div>
    );
};

export {TvMainCard};