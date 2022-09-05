import React, {FC, useCallback, useEffect, useRef, useState} from 'react';

import scss from './MultiRangeSlider.module.scss';
import {RootState, useAppDispatch} from "../../../store/store";
import {setMax, setMin} from "../../../store/slices/sort/sortSlice";
import {useSelector} from "react-redux";

interface MultiRangeSliderProps {
    min: number;
    max: number;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({min, max}) => {

    const dispatch = useAppDispatch();
    const {maxValueVoteAv, minValueVoteAv} = useSelector((state: RootState) => state.sort);

    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [maxValueVoteAv, minValueVoteAv]
    );

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            //@ts-ignore
            range.current.style.left = `${minPercent}%`;
            //@ts-ignore
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            //@ts-ignore
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);


    return (
        <div className={scss.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={minValueVoteAv}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    dispatch(setMin(value))
                    minValRef.current = value;
                }}
                className={`${scss.thumb} ${scss.thumb_left}`}
                style={{ zIndex: minValueVoteAv > max - 100 ? '5' : ''}}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxValueVoteAv}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    dispatch(setMax(value))
                    maxValRef.current = value;
                }}
                className={`${scss.thumb} ${scss.thumb_right}`}
                style={{ zIndex: maxValueVoteAv > max - 100 ? '5' : ''}}
            />

            <div className={scss.slider}>
                <div className={scss.slider_track}/>
                <div ref={range} className={scss.slider_range} />
                {/*<div className={scss.slider_left_value}>{minVal}</div>*/}
                {/*<div className={scss.slider_right_value}>{maxVal}</div>*/}
            </div>
        </div>
    );
};

export {MultiRangeSlider};