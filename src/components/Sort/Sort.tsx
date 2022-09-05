import React, {FC} from 'react';
import {useSelector} from "react-redux";

import scss from './Sort.module.scss';
import {SortRating} from "../UI";
import {RootState, useAppDispatch} from "../../store/store";
import {changeSendRequest} from "../../store/slices/sort/sortSlice";

const Sort: FC = () => {

    const {sendRequest} = useSelector((state: RootState) => state.sort);
    const dispatch = useAppDispatch();

    return (
        <div className={scss.sort}>
            <SortRating/>
            <div className={scss.sort_buttons}>
                <div>
                    <button
                        // style={{backgroundColor: disabled ? 'silver' : '', cursor: disabled ? 'default' : ''}}
                        className={scss.sort_buttons_apply}
                        onClick={() => dispatch(changeSendRequest(true))}

                    >
                        Застосувати
                    </button>
                </div>
                <div>
                    <button className={scss.sort_buttons_reset}>
                        Скинути
                    </button>
                </div>
            </div>
        </div>
    );
};

export {Sort};
