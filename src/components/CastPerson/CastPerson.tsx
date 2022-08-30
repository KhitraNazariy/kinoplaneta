import React, {FC} from 'react';
import {Link} from "react-router-dom";

import scss from './CastPerson.module.scss';
import {ICombineCreditsCast} from "../../types/ICombinedCredits";
import {getYear} from "../../utils/getYear";

const CastPerson: FC<ICombineCreditsCast> = (
    {
        title,
        release_date,
        name,
        character,
        first_air_date,
        id,
        media_type
    }
) => {

    const getDate = (releaseDate: string | undefined, firstAirDate: string | undefined): string | undefined => {
        if (!releaseDate) {
            return firstAirDate
        } else return releaseDate
    }

    return (
        <div className={scss.block}>
            <div className={scss.block_year}>{getYear(getDate(release_date, first_air_date))}</div>
            <input type="radio"/>
            <p className={scss.block_description}>
                <Link to={`/${media_type}/${id.toString()}`}><span className={scss.block_description_title}>{name}{title}</span></Link>
                <span className={scss.block_description_separator}>{character ? 'як' : ''}</span>
                <span className={scss.block_description_character}>{character}</span>
            </p>
        </div>
    );
};

export {CastPerson};
