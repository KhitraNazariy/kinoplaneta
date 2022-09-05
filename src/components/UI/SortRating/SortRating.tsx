import React, {FC} from 'react';

import scss from './SortRating.module.scss';
import {MultiRangeSlider} from "../index";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../../store/store";
import {setMax, setMin} from "../../../store/slices/sort/sortSlice";

const SortRating: FC = () => {

    const dispatch = useAppDispatch();

    const {minValueVoteAv, maxValueVoteAv} = useSelector((state: RootState) => state.sort);

    return (
        <div className={scss.sort}>
            <div className={scss.sort_rating}>
                <div className={scss.sort_rating_title}>
                    <h2>Рейтинг</h2>
                </div>
                <div className={scss.sort_rating_input}>
                    <div className={scss.sort_rating_input_field}>
                        <span>Від</span>
                        <input
                            type="number"
                            className={scss.ratingMin}
                            onChange={(event) => {
                                //@ts-ignore
                                dispatch(setMin(event.target.value))
                            }}
                            value={minValueVoteAv}
                            min={1}
                            max={10}
                            data-testid="input"
                            disabled={true}
                        />
                    </div>
                    <div className={scss.sort_rating_input_field}>
                        <span>До</span>
                        <input
                            type="number"
                            className={scss.ratingMax}
                            onChange={(event) => {
                                //@ts-ignore
                                dispatch(setMax(event.target.value))
                            }}
                            value={maxValueVoteAv}
                            min={1}
                            max={10}
                            data-testid="input"
                            disabled={true}
                        />
                    </div>
                </div>
                <MultiRangeSlider
                    min={1}
                    max={10}
                />
            </div>

        </div>
    );
};

export {SortRating};