import React, {FC} from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {Link} from "react-router-dom";

import scss from './Poster.module.scss';

const Poster: FC = () => {

    const poster = require('../../assets/img/bg.png')

    return (
        <section className={scss.poster} style={{backgroundImage: `url(${poster})`}}>
            <div className={scss.poster_inner}>
                <h2 className={scss.poster_title}>Швидкісний поїзд</h2>
                <p>
                    П’ятеро найманих вбивць, яких пов’язує одна й та сама місія, опиняються разом в швидкісному поїзді.
                    Що це, дивний збіг чи хитросплетений план? Герої з’ясують це власними методами.
                </p>
                <Link to={'movie/718930'}>
                    <button>Детальніше<AiOutlineArrowRight/></button>
                </Link>
            </div>
        </section>
    );
};

export {Poster};