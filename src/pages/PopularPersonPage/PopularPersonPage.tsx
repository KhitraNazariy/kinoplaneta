import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import scss from './PopularPersonPage.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {fetchPopularPerson} from "../../store/slices/person/asyncActions";
import {BadRequestPage} from "../BadRequestPage/BadRequestPage";
import {Loader, Pagination, PersonMainCard} from "../../components";

const PopularPersonPage: FC = () => {

    const {status, error, responsePopularPerson} = useSelector((state: RootState) => state.person);
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchPopularPerson({page}))
        window.scrollTo(0, 0)
    },[page])

    if (error) {
        return <BadRequestPage/>
    }

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <div className={scss.content}>
            <h2 className={scss.content_title}>Популярні</h2>
            <div className={scss.content_cards}>
                {
                    responsePopularPerson.results?.map(person => <PersonMainCard key={person.id} {...person}/>)
                }
            </div>
            <div style={{marginBottom: '30px'}}>
                <Pagination totalPages={responsePopularPerson.total_pages} page={page} setPage={setPage}/>
            </div>
        </div>
    );
};

export {PopularPersonPage};