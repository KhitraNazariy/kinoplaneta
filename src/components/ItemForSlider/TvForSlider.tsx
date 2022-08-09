import React, {FC} from 'react';

import scss from "./SliderCard.module.scss";
import {getColorForRating} from "../../utils/getColorForRating";
import {URL_IMG} from "../../configs";
import {getDate} from "../../utils/getDate";
import {ITv} from "../../types/ITv";

const TvForSlider: FC<ITv> = ({poster_path, vote_average, name, first_air_date}) => {
    return (
        <div className={scss.sliderCard}>
            <p
                className={scss.sliderCard_voteAverage}
                style={{backgroundColor: `${getColorForRating(vote_average)}`}}
            >
                {vote_average}
            </p>
            <img src={`${URL_IMG}${poster_path}`} alt={name}/>
            <div className={scss.sliderCard_description}>
                <h3>{name}</h3>
                <p>{getDate(first_air_date)}</p>
            </div>
        </div>
    );
};

export {TvForSlider};