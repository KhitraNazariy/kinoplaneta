import React, {FC} from 'react';

import scss from './NotFoundPage.module.scss';
import {Link} from "react-router-dom";

const NotFoundPage: FC = () => {
    return (
        <div className={scss.notFound}>
            <h2>404. Сторінка не знайдена</h2>
            <p>Можливо, вона була переміщена, або ви просто невірно вказали адрес сторінки</p>
            <Link to={'/'}>
                <button>Повернутись на головну</button>
            </Link>
        </div>
    );
};

export {NotFoundPage};