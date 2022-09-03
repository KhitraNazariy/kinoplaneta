import React, {FC} from 'react';

import scss from './KnownForCard.module.scss';
import {IMovie} from "../../types/IMovie";
import {ITv} from "../../types/ITv";
import {URL_IMG} from "../../configs";
import {getColorForRating} from "../../utils/getColorForRating";
import {Link} from "react-router-dom";

const KnownForCard: FC<IMovie | ITv> = ({id,poster_path,vote_average}) => {
    return (
        <Link to={`/movie/${id.toString()}`}>
            <div className={scss.card}>
                <img src={poster_path ? `${URL_IMG}/${poster_path}` : ''} alt=""/>
                <p style={{backgroundColor: `${getColorForRating(vote_average)}`}}>{vote_average}</p>
            </div>
        </Link>
    );
};

export {KnownForCard};