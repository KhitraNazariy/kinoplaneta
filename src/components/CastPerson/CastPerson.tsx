import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {AiFillStar} from "react-icons/ai";

import scss from './CastPerson.module.scss';
import {ICombineCreditsCast} from "../../types/ICombinedCredits";
import {getYear} from "../../utils/getYear";
import {URL_IMG} from "../../configs";

type PopupClick = MouseEvent & {
    path: Node[];
};

const CastPerson: FC<ICombineCreditsCast> = (
    {
        title,
        release_date,
        name,
        character,
        first_air_date,
        id,
        media_type,
        poster_path,
        overview,
        vote_average
    }
) => {

    const [isChecked, setIsChecked] = useState(false);
    const detailsRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          const _event = event as PopupClick

            if (detailsRef.current && !_event.path.includes(detailsRef.current)) {
                setIsChecked(false)
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => document.body.removeEventListener('click', handleClickOutside)

    },[])

    const getDate = (releaseDate: string | undefined, firstAirDate: string | undefined): string | undefined => {
        if (!releaseDate) {
            return firstAirDate
        } else return releaseDate
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
    }

    return (
        <div ref={detailsRef} className={scss.block}>
            <div style={{display: isChecked ? 'flex' : 'none'}} className={scss.block_popup}>
                <Link to={`/${media_type}/${id.toString()}`}>
                    <img src={`${URL_IMG}${poster_path}`} alt={`${name}${title}`}/>
                </Link>
                <div className={scss.block_popup_details}>
                    <div className={scss.block_popup_details_title}>
                        <Link to={`/${media_type}/${id.toString()}`}>
                            <h3>{name}{title}</h3>
                        </Link>
                        <p><AiFillStar/>{vote_average}</p>
                    </div>
                    <p>{overview ? overview : 'Опис відсутній'}</p>
                </div>
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
