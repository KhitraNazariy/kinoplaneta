import React, {FC} from 'react';

import scss from './PersonMainCard.module.scss';
import {IPerson} from "../../types/IPerson";
import {URL_IMG} from "../../configs";

const PersonMainCard: FC<IPerson> = ({name, profile_path}) => {
    return (
        <div className={scss.card}>
            <img src={`${URL_IMG}${profile_path}`} alt={name}/>
            <h2>{name}</h2>
        </div>
    );
};

export {PersonMainCard};