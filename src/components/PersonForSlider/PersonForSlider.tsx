import React, {FC} from 'react';

import scss from './PersonForSlider.module.scss';
import {ICast} from "../../types/ICreditsMovie";
import {URL_IMG} from "../../configs";
import {ICastTv} from "../../types/ICreditsTv";

const PersonForSlider: FC<ICast | ICastTv> = ({character, name, profile_path}) => {

    return (
        <div className={scss.card}>
            <img style={{backgroundColor: profile_path ? '' : 'black'}} src={`${URL_IMG}/${profile_path}`} alt={name}/>
            <div className={scss.card_description}>
                <h3>{name}</h3>
                <p>{character}</p>
            </div>
        </div>
    );
};

export {PersonForSlider};