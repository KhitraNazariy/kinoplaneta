import React, {FC} from 'react';
import {Link} from "react-router-dom";

import scss from './BadRequestPage.module.scss';
import {ButtonReturn} from "../../components";

const BadRequestPage: FC = () => {
    return (
        <div className={scss.wrap}>
            <h2>400. Сервер не відповідає</h2>
            <Link to={'/'}>
                <ButtonReturn/>
            </Link>
        </div>
    );
};

export {BadRequestPage};
