import React, {FC} from 'react';
import {Link} from "react-router-dom";

import scss from './PersonForSlider.module.scss';
import {ICast} from "../../types/ICreditsMovie";
import {URL_IMG} from "../../configs";
import {ICastTv} from "../../types/ICreditsTv";

const PersonForSlider: FC<ICast | ICastTv> = ({character, name, profile_path, id}) => {

    return (
        <div className={scss.card}>
            <Link to={`/person/${id.toString()}`}>
                <img style={{backgroundColor: profile_path ? '' : 'black'}} src={`${URL_IMG}/${profile_path}`} alt={name}/>
            </Link>
            <div className={scss.card_description}>
                <Link to={`/person/${id.toString()}`}>
                    <h3>{name}</h3>
                </Link>
                <p>{character}</p>
            </div>
        </div>
    );
};

export {PersonForSlider};