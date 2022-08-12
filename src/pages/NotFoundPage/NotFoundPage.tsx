import React, {FC} from 'react';
import {Link} from "react-router-dom";

import scss from './NotFoundPage.module.scss';
import {ButtonReturn} from "../../components";

const NotFoundPage: FC = () => {
    return (
        <div className={scss.notFound}>
            <h2>404. Сторінка не знайдена</h2>
            <p>Можливо, вона була переміщена, або ви просто невірно вказали адрес сторінки</p>
            <Link to={'/'}>
                <ButtonReturn/>
            </Link>
        </div>
    );
};

export {NotFoundPage};