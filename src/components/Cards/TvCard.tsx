import React, {FC} from 'react';
import {MdLibraryAdd, MdLibraryAddCheck, MdOutlineBookmarkAdded} from "react-icons/md";
import {Link} from "react-router-dom";

import scss from './Cards.module.scss';
import {URL_IMG} from "../../configs";
import {getYear} from "../../utils/getYear";
import {getColorForRating} from "../../utils/getColorForRating";
import {ITv} from "../../types/ITv";
import {RootState, useAppDispatch} from "../../store/store";
import {addSelectedTv} from "../../store/slices/tv/tvSlice";
import {addSelectedMovie} from "../../store/slices/movie/movieSlice";
import {useSelector} from "react-redux";

interface ITvMainCardProps {
    tv: ITv
}

const TvCard: FC<ITvMainCardProps> = ({tv}) => {

    const {id, poster_path,name, first_air_date, overview, vote_average} = tv;

    const dispatch = useAppDispatch();

    const {selectedTv} = useSelector((state: RootState) => state.tv);

    const isSelected = () => {
        return !!selectedTv.find(tv => tv.id === id);
    }

    return (
        <div className={scss.card}>
            <Link to={`/tv/${id.toString()}`}>
                <img src={`${URL_IMG}${poster_path}`} alt={name}/>
            </Link>
            <div className={scss.card_content}>
                <div className={scss.card_content_description}>
                    <Link to={`/tv/${id.toString()}`}>
                        <h3>{name}</h3>
                    </Link>
                    <p className={scss.date}>{getYear(first_air_date)}</p>
                    <p className={scss.overview}>{overview}</p>
                </div>
                <div className={scss.card_content_description_additional}>
                    <div
                        className={scss.card_content_description_additional_rating}
                        style={{color: `${getColorForRating(vote_average)}`}}
                    >
                        {vote_average}
                    </div>
                    <button
                        className={scss.btn}
                        onClick={() => dispatch(addSelectedTv(tv))}
                        disabled={isSelected()}
                    >
                        {!isSelected() && <><MdLibraryAdd size={17}/>Буду дивитись</>}
                        {isSelected() && <><MdLibraryAddCheck size={17}/>Буду дивитись</>}
                    </button>
                    <button
                        disabled={isSelected()}
                        className={scss.mobileBtn}
                        onClick={() => dispatch(addSelectedTv(tv))}
                    >
                        {!isSelected() && <MdLibraryAdd size={17}/>}
                        {isSelected() && <MdLibraryAddCheck size={17}/>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export {TvCard};
