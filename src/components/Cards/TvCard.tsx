import React, {FC} from 'react';
import {MdOutlineBookmarkAdded} from "react-icons/md";
import {Link} from "react-router-dom";

import scss from './Cards.module.scss';
import {URL_IMG} from "../../configs";
import {getYear} from "../../utils/getYear";
import {getColorForRating} from "../../utils/getColorForRating";
import {ITv} from "../../types/ITv";

const TvCard: FC<ITv> = ({poster_path, name, first_air_date, overview, vote_average,id}) => {

    return (
        <div className={scss.card}>
            <Link to={`/tv/${id.toString()}`}>
                <img src={`${URL_IMG}${poster_path}`} alt={name}/>
            </Link>
            <div className={scss.card_content}>
                <div className={scss.card_content_description}>
                    <Link to={`/tv/${id.toString()}`}>
                        <h3>{name}</h3>
                    </Link>
                    <p className={scss.date}>{getYear(first_air_date)}</p>
                    <p className={scss.overview}>{overview}</p>
                </div>
                <div className={scss.card_content_description_additional}>
                    <div
                        className={scss.card_content_description_additional_rating}
                        style={{color: `${getColorForRating(vote_average)}`}}
                    >
                        {vote_average}
                    </div>
                    <button><MdOutlineBookmarkAdded size={17}/>Буду дивитись</button>
                    <button className={scss.mobileBtn}><MdOutlineBookmarkAdded size={17}/></button>
                </div>
            </div>
        </div>
    );
};

export {TvCard};
