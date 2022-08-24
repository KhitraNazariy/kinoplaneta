import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {RootState, useAppDispatch} from "../../store/store";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";
import {Loader, RecommendationsMovie, RecommendationsTv, TabsComponent, TvMainDetails} from "../../components";
import {fetchCreditsTv, fetchRecommendationsTv, fetchTvDetails} from "../../store/slices/tv/asyncActions";
import scss from "./DetailsPages.module.scss";
import Slider from "react-slick";
import {settings} from "../../utils/SettingForSlider";
import {ITv} from "../../types/ITv";

const TvDetailsPage: FC = () => {

    const {
        status,
        error,
        responseTvDetails,
        responseRecommendationsTv,
        responseTvCredits
    } = useSelector((state: RootState) => state.tv);
    const dispatch = useAppDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchTvDetails({id}))
        dispatch(fetchRecommendationsTv({id}))
        dispatch(fetchCreditsTv({id}))
    }, [id])

    const isEmptyArr = (arr: any) => {
        return arr?.length !== 0;
    }

    if (error) {
        return <BadRequestPage/>
    }

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <section className={scss.wrap}>
            <TvMainDetails data={responseTvDetails}/>
            <div className={scss.content}>
                <TabsComponent
                    cast={responseTvCredits.cast}
                    overview={responseTvDetails.overview}
                    id={responseTvDetails.id}
                />
                {
                    isEmptyArr(responseRecommendationsTv.results) && (
                        <div className={scss.content_recommendations}>
                            <h2>Рекомендації</h2>
                            <Slider {...settings}>
                                {
                                    Array.isArray(responseRecommendationsTv.results) &&
                                    responseRecommendationsTv.results.map(tv => <RecommendationsTv key={tv.id} {...tv}/>)
                                }
                            </Slider>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export {TvDetailsPage};
