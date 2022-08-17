import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {RootState, useAppDispatch} from "../../store/store";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";
import {Loader, TvMainDetails} from "../../components";
import {fetchTvDetails} from "../../store/slices/tv/asyncActions";
import scss from "./DetailsPages.module.scss";

const TvDetailsPage: FC = () => {

    const {status, error, responseTvDetails} = useSelector((state: RootState) => state.tv);
    const dispatch = useAppDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchTvDetails({id: id}))
    }, [])

    if (error) {
        return <BadRequestPage/>
    }

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <section className={scss.wrap}>
            <TvMainDetails data={responseTvDetails}/>
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

export {TvDetailsPage};
