import React, {ChangeEvent, FC, FormEvent, InputHTMLAttributes, useState} from 'react';
import {Link} from "react-router-dom";

import scss from './CastPerson.module.scss';
import {ICombineCreditsCast} from "../../types/ICombinedCredits";
import {getYear} from "../../utils/getYear";
import {URL_IMG} from "../../configs";

const CastPerson: FC<ICombineCreditsCast> = (
    {
        title,
        release_date,
        name,
        character,
        first_air_date,
        id,
        media_type,
        poster_path
    }
) => {

    const [isChecked, setIsChecked] = useState(false);

    const getDate = (releaseDate: string | undefined, firstAirDate: string | undefined): string | undefined => {
        if (!releaseDate) {
            return firstAirDate
        } else return releaseDate
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
    }

    return (
        <div className={scss.block}>
            <div style={{display: isChecked ? 'block' : 'none'}} className={scss.block_popup}>
                <img src={`${URL_IMG}${poster_path}`} alt={`${name}${title}`}/>
                <div className={scss.block_popup_details}>
                    <h3>{name}{title}</h3>
                </div>
                <button onClick={() => setIsChecked(!isChecked)}>close</button>
            </div>
            <div className={scss.block_year}>{getYear(getDate(release_date, first_air_date))}</div>
            <input type="radio" onChange={onChange} checked={isChecked}/>
            <p className={scss.block_description}>
                <Link to={`/${media_type}/${id.toString()}`}><span className={scss.block_description_title}>{name}{title}</span></Link>
                <span className={scss.block_description_separator}>{character ? 'як' : ''}</span>
                <span className={scss.block_description_character}>{character}</span>
            </p>
        </div>
    );
};

export {CastPerson};
