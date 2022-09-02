import React, {FC, useState} from 'react';

import scss from './SortRating.module.scss';
import {MultiRangeSlider} from "../index";

const SortRating: FC = () => {

    const [min, setMin] = useState();
    const [max, setMax] = useState();

    console.log(max, min)

    return (
        <div className={scss.sort}>
            <div className={scss.sort_rating}>
                <div className={scss.sort_rating_title}>
                    <h2>Рейтинг</h2>
                </div>
                <div className={scss.sort_rating_input}>
                    <div className={scss.sort_rating_input_field}>
                        <span>Від</span>
                        <input type="number" className={scss.ratingMin} value={min}/>
                    </div>
                    <div className={scss.sort_rating_input_field}>
                        <span>До</span>
                        <input type="number" className={scss.ratingMax} value={max}/>
                    </div>
                </div>
                <MultiRangeSlider
                    min={1}
                    max={10}
                    onChange={({ min, max }) => {
                        setMin(min)
                        setMax(max)
                    }}
                />
            </div>

        </div>
    );
};

export {SortRating};