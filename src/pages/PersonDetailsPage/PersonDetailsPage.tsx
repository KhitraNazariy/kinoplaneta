import React, {FC, useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import scss from './PersonDetailsPage.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchCombinedCredits, fetchPersonDetails} from "../../store/slices/person/asyncActions";
import {URL_IMG} from "../../configs";
import {getDate} from "../../utils/getDate";
import {getYear} from "../../utils/getYear";
import {CastPerson, KnownForCard} from "../../components";

const PersonDetailsPage: FC = () => {

    const _ = require("lodash");
    const dispatch = useAppDispatch();
    const {
        responseDetailsPerson,
        responseCombineCredits
    } = useSelector((state: RootState) => state.person);

    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchPersonDetails({id}))
        dispatch(fetchCombinedCredits({id}))
    }, [])

    const numberOfShots = responseCombineCredits.cast?.length

    const getAge = (): number => {
        if (!responseDetailsPerson.deathday) {
            return new Date().getFullYear() - Number(getYear(responseDetailsPerson.birthday))
        } else {
            return Number(getYear(responseDetailsPerson.deathday)) - Number(getYear(responseDetailsPerson.birthday))
        }
    }

    const {state} = useLocation();

    const sort = _.orderBy(responseCombineCredits.cast, ['release_date', 'first_air_date'], 'desc')

    return (
        <div className={scss.content}>
            <div className={scss.content_left}>
                <img src={`${URL_IMG}${responseDetailsPerson.profile_path}`} alt={`${responseDetailsPerson.name}`}/>
                <div>
                    <h2 className={scss.title}>Особиста інформація</h2>
                    <div className={scss.content_left_info}>
                        <div className={scss.content_left_info_block}>
                            <h3>Відомий(-а) за</h3>
                            <p>
                                {responseDetailsPerson.known_for_department}
                            </p>
                        </div>
                        <div className={scss.content_left_info_block}>
                            <h3>Кількість зйомок</h3>
                            <p>
                                {numberOfShots}
                            </p>
                        </div>
                        <div className={scss.content_left_info_block}>
                            <h3>День народження</h3>
                            <p>
                                {getDate(responseDetailsPerson.birthday)}
                                {!responseDetailsPerson.deathday ? `(${getAge()} years old)` : ''}
                            </p>
                        </div>
                        {
                            responseDetailsPerson.deathday && (
                                <div className={scss.content_left_info_block}>
                                    <h3>День смерті</h3>
                                    <p>
                                        {getDate(responseDetailsPerson.deathday)}
                                        {responseDetailsPerson.deathday ? `(${getAge()} years old)` : ''}
                                    </p>
                                </div>
                            )
                        }
                        <div className={scss.content_left_info_block}>
                            <h3>Місце народження</h3>
                            <p>
                                {responseDetailsPerson.place_of_birth}
                            </p>
                        </div>
                        <div className={scss.content_left_info_block_knownAs}>
                            <h3>Також відомий(-а) як</h3>
                            {
                                responseDetailsPerson.also_known_as?.map((item, index) => (
                                    <p
                                        key={index}
                                        style={{lineHeight: '30px'}}
                                    >
                                        {item}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={scss.content_right}>
                <h2 className={scss.content_right_title}>
                    {responseDetailsPerson.name}
                </h2>
                <div className={scss.content_right_biography}>
                    <h3>Біографія</h3>
                    <p>
                        {
                            responseDetailsPerson.biography ? responseDetailsPerson.biography : 'Біографія відсутня'
                        }
                    </p>
                </div>
                <div className={scss.content_right_knowFor}>
                    <h2>Відомий(-а) за</h2>
                    <div className={scss.content_right_knowFor_cards}>
                        {
                            //@ts-ignore
                            state?.map((item, index) => <KnownForCard key={index} {...item}/>)
                        }
                    </div>
                </div>
                <div className={scss.content_right_playing}>
                    <h2>Гра</h2>
                    <div className={scss.content_right_playing_blocks}>
                        {
                            sort?.map(item => <CastPerson key={item.id} {...item}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export {PersonDetailsPage};