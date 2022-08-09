import React, {FC, useEffect} from 'react';
import Slider from "react-slick";
import {useSelector} from "react-redux";

import scss from './Sliders.module.scss';
import {settings} from "../../utils/SettingForSlider";
import {RootState, useAppDispatch} from "../../store/store";
import {fetchTopRatedTv} from "../../store/slices/tv/asyncActions";
import {TvForSlider} from "../ItemForSlider";

const SliderTopRatedTv: FC = () => {

    const {responseTopRatedTv} = useSelector((state: RootState) => state.tv);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTopRatedTv())
    },[])

    return (
        <section className={scss.slider}>
            <div className={scss.slider_title}>
                <h2>Серіали з високим рейтингом</h2>
                <button>Дивитись всі</button>
            </div>
            <Slider {...settings}>
                {
                    Array.isArray(responseTopRatedTv.results) &&
                    responseTopRatedTv.results.map(tv => <TvForSlider key={tv.id} {...tv}/>)
                }
            </Slider>
        </section>
    );
};

export {SliderTopRatedTv};