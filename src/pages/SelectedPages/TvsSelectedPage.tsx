import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";
import {AiOutlineClear} from "react-icons/ai";

import scss from './SelectedPage.module.scss';
import {RootState, useAppDispatch} from "../../store/store";
import {SelectedTvCard} from "../../components";
import {clearSelectedMovie} from "../../store/slices/movie/movieSlice";
import {clearSelectedTv} from "../../store/slices/tv/tvSlice";

const TvsSelectedPage: FC = () => {

    const {selectedTv} = useSelector((state: RootState) => state.tv);

    const dispatch = useAppDispatch();

    useEffect(() => {

    },[selectedTv])

    return (
        <div className={scss.container}>
            <h2>Обрані серіали</h2>
            {!selectedTv.length && <div className={scss.empty}>Список обраних серіалів пустий</div>}
            {selectedTv.length > 0 &&
                <button
                    className={scss.clearBtn}
                    onClick={() => dispatch(clearSelectedTv())}
                >
                    <AiOutlineClear size={21}/>
                    Очистити список
                </button>
            }
            {selectedTv.map(tv => <SelectedTvCard key={tv.id} {...tv}/>)}
        </div>
    );
};

export {TvsSelectedPage};