import React, {FC} from 'react';

import scss from "./SortItem.module.scss";
import {setMax, setMin} from "../../../store/slices/sort/sortSlice";
import {MultiRangeSlider} from "../MultiRangeSlider/MultiRangeSlider";
import {RootState, useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";

const SortYear: FC = () => {

    const dispatch = useAppDispatch();

    const {minReleaseYear, maxReleaseYear} = useSelector((state: RootState) => state.sort);

    return (
        <div className={scss.sort}>
            <div className={scss.sort_rating}>
                <div className={scss.sort_rating_title}>
                    <h2>Дата виходу</h2>
                </div>
                <div className={scss.sort_rating_input}>
                    <div className={scss.sort_rating_input_field}>
                        <span>Від</span>
                        <input
                            type="number"
                            className={scss.ratingMin}
                            onChange={(event) => {
                                dispatch(setMin({type: 'year', value: Number(event.target.value)}))
                            }}
                            value={minReleaseYear}
                            min={1874}
                            max={new Date().getFullYear()}
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
                                dispatch(setMax({type: 'year', value: Number(event.target.value)}))
                            }}
                            value={maxReleaseYear}
                            min={1874}
                            max={new Date().getFullYear()}
                            data-testid="input"
                            disabled={true}
                        />
                    </div>
                </div>
                <MultiRangeSlider
                    min={1874}
                    max={new Date().getFullYear()}
                    minValProps={minReleaseYear}
                    maxValProps={maxReleaseYear}
                    type={'year'}
                />
            </div>

        </div>
    );
};

export {SortYear};