import React, {FC} from 'react';

import backgroundImg from '../../assets/img/poster.png';
import scss from './Poster.module.scss';

const Poster: FC = () => {
    return (
        <section className={scss.poster} style={{backgroundImage: `url(${backgroundImg})`}}>
            Poster: FC
        </section>
    );
};

export {Poster};