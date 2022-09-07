import React, {FC} from 'react';
import {useSelector} from "react-redux";

import scss from './Sort.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {changeSendRequest, resetBtn} from "../../store/slices/sort/sortSlice";
import {SortRating} from "../UI";
import {SortYear} from "../UI/SortItems/SortYear";

const Sort: FC = () => {

    const {
        maxValueVoteAv,
        minValueVoteAv,
        disabledBtn,
        minReleaseYear,
        maxReleaseYear
    } = useSelector((state: RootState) => state.sort);
    const dispatch = useAppDispatch();


    return (
        <div className={scss.sort}>
            <div className={scss.sort_info}>
                <div className={scss.sort_info_item}>Рейтинг: {minValueVoteAv} - {maxValueVoteAv}</div>
                <div className={scss.sort_info_item}>Рік виходу: {minReleaseYear} - {maxReleaseYear}</div>
            </div>
            <div className={scss.sort_items}>
                <SortRating/>
                <SortYear/>
            </div>
            <div className={scss.sort_buttons}>
                <div>
                    <button
                        style={{backgroundColor: disabledBtn ? 'silver' : '', cursor: disabledBtn ? 'default' : ''}}
                        className={scss.sort_buttons_apply}
                        onClick={() => dispatch(changeSendRequest(true))}

                    >
                        Застосувати
                    </button>
                </div>
                <div>
                    <button
                        className={scss.sort_buttons_reset}
                        onClick={() => dispatch(resetBtn(true))}
                    >
                        Скинути
                    </button>
                </div>
            </div>
        </div>
    );
};

export {Sort};
