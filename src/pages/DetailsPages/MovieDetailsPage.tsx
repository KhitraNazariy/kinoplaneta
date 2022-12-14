import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import scss from './DetailsPages.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchCreditsMovie, fetchMovieDetails, fetchRecommendationsMovie} from "../../store/slices/movie/asyncActions";
import {Loader, MovieMainDetails, RecommendationsMovie, TabsComponent} from "../../components";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";
import Slider from "react-slick";
import {settings} from "../../utils/SettingForSlider";
import {IMovie} from "../../types/IMovie";
import YouTube from "react-youtube";

const MovieDetailsPage: FC = () => {

    const {
        status,
        error,
        responseMovieDetails,
        responseMovieRecommendations,
        responseMovieCredits,
    } = useSelector((state: RootState) => state.movie);
    const dispatch = useAppDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchMovieDetails({id: id}))
        dispatch(fetchCreditsMovie({id: id}))
        dispatch(fetchRecommendationsMovie({id: id}))
        window.scrollTo(0, 0)
    }, [id])

    const isEmptyArr = (arr: IMovie[]) => {
        return arr?.length !== 0;
    }

    if (error) {
        return <BadRequestPage/>
    }

    if (status === 'loading' && !responseMovieDetails) {
        return <Loader/>
    }

    return (
        <section className={scss.wrap}>
            <MovieMainDetails data={responseMovieDetails}/>
            <div className={scss.content}>
                <TabsComponent
                    cast={responseMovieCredits.cast}
                    overview={responseMovieDetails.overview}
                    id={responseMovieDetails.id}
                />
                {
                    isEmptyArr(responseMovieRecommendations.results) && (
                        <div className={scss.content_recommendations}>
                            <h2>Рекомендації</h2>
                            <Slider {...settings}>
                                {
                                    Array.isArray(responseMovieRecommendations.results) &&
                                    responseMovieRecommendations.results.map(movie => <RecommendationsMovie key={movie.id} {...movie}/>)
                                }
                            </Slider>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export {MovieDetailsPage};