import React, {FC} from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import backgroundImg from '../../assets/img/poster.png';
import scss from './Poster.module.scss';

const Poster: FC = () => {
    return (
        <section style={{backgroundImage: `url(${backgroundImg})`}}>
            <div className={scss.inner}>
                <h2 className={scss.poster_title}>Тор: Любовь и гром</h2>
                <p>
                    Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота
                    Мьёльнира.
                </p>
                <button>Детальніше<AiOutlineArrowRight/></button>
            </div>
        </section>
    );
};

export {Poster};