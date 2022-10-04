import React, {FC} from 'react';
import {Link} from "react-router-dom";

import scss from './Cards.module.scss';
import {IMovie} from "../../types/IMovie";
import {URL_IMG} from "../../configs";
import {getYear} from "../../utils/getYear";
import {getColorForRating} from "../../utils/getColorForRating";
import {MdLibraryAdd, MdLibraryAddCheck} from "react-icons/md";
import {addSelectedMovie} from "../../store/slices/movie/movieSlice";
import {RootState, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";

interface IMovieMainCardProps {
    movie: IMovie
}

const MovieCard: FC<IMovieMainCardProps> = ({movie}) => {

    const {id, poster_path, release_date, title, overview, vote_average} = movie;

    const dispatch = useAppDispatch();

    const {selectedMovies} = useSelector((state: RootState) => state.movie);

    const isSelected = () => {
      return !!selectedMovies.find(movie => movie.id === id);
    }


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
                        className={scss.btn}
                        onClick={() => dispatch(addSelectedMovie(movie))}
                        disabled={isSelected()}
                    >
                        {!isSelected() && <><MdLibraryAdd size={17}/>Буду дивитись</>}
                        {isSelected() && <><MdLibraryAddCheck size={17}/>Буду дивитись</>}
                    </button>
                    <button
                        disabled={isSelected()}
                        className={scss.mobileBtn}
                        onClick={() => dispatch(addSelectedMovie(movie))}
                    >
                        {!isSelected() && <MdLibraryAdd size={17}/>}
                        {isSelected() && <MdLibraryAddCheck size={17}/>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export {MovieCard};
