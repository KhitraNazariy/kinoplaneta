import React, {FC} from 'react';

import scss from './PersonMainCard.module.scss';
import {IPerson} from "../../types/IPerson";
import {URL_IMG} from "../../configs";
import {Link} from "react-router-dom";

const PersonMainCard: FC<IPerson> = ({name, profile_path, id}) => {
    return (
        <div className={scss.card}>
            <Link to={`/person/${id.toString()}`}>
                <img src={`${URL_IMG}${profile_path}`} alt={name}/>
            </Link>
            <Link to={`/person/${id.toString()}`}>
                <h2>{name}</h2>
            </Link>
        </div>
    );
};

export {PersonMainCard};