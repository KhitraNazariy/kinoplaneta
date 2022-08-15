import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import scss from './DetailsPages.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchMovieDetails} from "../../store/slices/movie/asyncActions";
import {Loader, MovieMainDetails} from "../../components";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";

const MovieDetailsPage: FC = () => {

    const {status, error, responseMovieDetails} = useSelector((state: RootState) => state.movie);
    const dispatch = useAppDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchMovieDetails({id: id}))
    }, [])

    if (error) {
        return <BadRequestPage/>
    }

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <section className={scss.wrap}>
            <MovieMainDetails data={responseMovieDetails}/>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
            <div>df</div>
        </section>
    );
};

export {MovieDetailsPage};