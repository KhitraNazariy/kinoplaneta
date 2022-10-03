import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {AiFillDelete} from "react-icons/ai";

import scss from './Cards.module.scss';
import {IMovie} from "../../types/IMovie";
import {URL_IMG} from "../../configs";
import {getYear} from "../../utils/getYear";
import {getColorForRating} from "../../utils/getColorForRating";
import {useAppDispatch} from "../../store/store";
import {removeSelectedMovie} from "../../store/slices/movie/movieSlice";

const SelectedMovieCard: FC<IMovie> = ({poster_path, title, release_date, overview, vote_average, id}) => {

    const dispatch = useAppDispatch();

    return (
        <div className={scss.card}>
            <Link to={`/movie/${id.toString()}`}>
                <img src={`${URL_IMG}${poster_path}`} alt={title}/>
            </Link>
            <div className={scss.card_content}>
                <div className={scss.card_content_description}>
                    <Link to={`/movie/${id.toString()}`}>
                        <h3>{title}</h3>
                    </Link>
                    <p className={scss.date}>{getYear(release_date)}</p>
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
                        onClick={() => dispatch(removeSelectedMovie(id))}
                    >
                        <AiFillDelete size={17}/>Видалити
                    </button>
                    <button
                        className={scss.mobileBtn}
                        onClick={() => dispatch(removeSelectedMovie(id))}
                    >
                        <AiFillDelete size={17}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export {SelectedMovieCard};
