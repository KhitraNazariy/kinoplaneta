import React, {FC, useEffect} from 'react';
import Slider from "react-slick";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import scss from './Sliders.module.scss';
import {settings} from "../../utils/SettingForSlider";
import {RootState, useAppDispatch} from "../../store/store";
import {fetchTopRatedTv} from "../../store/slices/tv/asyncActions";
import {TvForSlider} from "../ItemForSlider";

const SliderTopRatedTv: FC = () => {

    const {responseTopRatedTv} = useSelector((state: RootState) => state.tv);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTopRatedTv({page: 1}))
    },[])

    return (
        <section className={scss.slider}>
            <div className={scss.slider_title}>
                <h2>Серіали з високим рейтингом</h2>
                <Link to={'tv-top-rated'}>
                    <button>Дивитись всі</button>
                </Link>
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