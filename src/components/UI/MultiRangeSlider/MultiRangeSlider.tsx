import React, {FC, useCallback, useEffect, useRef, useState} from 'react';

import scss from './MultiRangeSlider.module.scss';
import {RootState, useAppDispatch} from "../../../store/store";
import {resetBtn, setMax, setMin} from "../../../store/slices/sort/sortSlice";
import {useSelector} from "react-redux";

interface MultiRangeSliderProps {
    min: number;
    max: number;
    minValProps: number;
    maxValProps: number;
    type: string;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({min, max, minValProps, maxValProps, type}) => {

    const dispatch = useAppDispatch();

    const {isResetBtn} = useSelector((state: RootState) => state.sort);

    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement>(null);


    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }

    }, [minVal, getPercent]);

    useEffect(() => {
        return () => {
            dispatch(setMin({type, value: min}))
            dispatch(setMax({type, value: max}))
        }
    }, [])

    useEffect(() => {

        if (isResetBtn) {
            setMaxVal(max)
            setMinVal(min)
            dispatch(setMin({type, value: min}))
            dispatch(setMax({type, value: max}))
            minValRef.current = min
            maxValRef.current = max
        }
        dispatch(resetBtn(false))

    } ,[isResetBtn])

    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);
        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);


    return (
        <div className={scss.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={minValProps}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxValProps - 1);
                    setMinVal(value);
                    dispatch(setMin({type, value}))
                    minValRef.current = value;
                }}
                className={`${scss.thumb} ${scss.thumb_left}`}
                style={{zIndex: minValProps > max - 100 ? '5' : ''}}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxValProps}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minValProps + 1);
                    setMaxVal(value);
                    dispatch(setMax({type, value}))
                    maxValRef.current = value;
                }}
                className={`${scss.thumb} ${scss.thumb_right}`}
                style={{zIndex: maxValProps > max - 100 ? '5' : ''}}
            />

            <div className={scss.slider}>
                <div className={scss.slider_track}/>
                <div ref={range} className={scss.slider_range}/>
            </div>
        </div>
    );
};

export {MultiRangeSlider};