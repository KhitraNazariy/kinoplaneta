import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {INowPlayingMovie} from "../../../types/INowPlayingMovie";
import {
    fetchCreditsMovie, fetchDiscoverMovie, fetchGenresMovie,
    fetchMovieDetails,
    fetchNowPlayingMovie,
    fetchPopularMovie, fetchRecommendationsMovie, fetchSearchMovie,
    fetchTopRatedMovie,
    fetchUpcomingMovie
} from "./asyncActions";
import {IPopularMovie} from "../../../types/IPopularMovie";
import {IUpcomingMovie} from "../../../types/IUpcomingMovie";
import {ITopRatedMovie} from "../../../types/ITopRatedMovie";
import {IMovieDetails} from "../../../types/IMovieDetails";
import {ICreditsMovie} from "../../../types/ICreditsMovie";
import {IRecommendationMovie} from "../../../types/IRecommendationMovie";
import {IDiscoverMovie} from "../../../types/IDiscoverMovie";
import {IGenres} from "../../../types/IGenres";
import {IMovies} from "../../../types/IMovies";
import {IMovie} from "../../../types/IMovie";


interface MovieSliceState {
    responseNowPlayingMovie: INowPlayingMovie;
    responsePopularMovie: IPopularMovie;
    responseUpcomingMovie: IUpcomingMovie;
    responseTopRatedMovie: ITopRatedMovie;
    responseMovieDetails: IMovieDetails;
    responseMovieCredits: ICreditsMovie;
    responseMovieRecommendations: IRecommendationMovie;
    responseDiscoverMovie: IDiscoverMovie;
    responseGenresMovie: IGenres;
    responseSearchMovie: IMovies;
    status: string;
    error: string | null;
    selectedMovies: IMovie[];
}

const initialState: MovieSliceState = {
    responseNowPlayingMovie: {} as INowPlayingMovie,
    responsePopularMovie: {} as IPopularMovie,
    responseUpcomingMovie: {} as IUpcomingMovie,
    responseTopRatedMovie: {} as ITopRatedMovie,
    responseMovieDetails: {} as IMovieDetails,
    responseMovieCredits: {} as ICreditsMovie,
    responseMovieRecommendations: {} as IRecommendationMovie,
    responseDiscoverMovie: {} as IDiscoverMovie,
    responseGenresMovie: {} as IGenres,
    responseSearchMovie: {} as IMovies,
    status: '',
    error: null,
    selectedMovies: []
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
        clearResponseSearchMovie: (state) => {
            state.responseSearchMovie = {} as IMovies
        },

        addSelectedMovie: (state, action) => {
            state.selectedMovies.push(action.payload)
        },

        removeSelectedMovie: (state, action) => {
            state.selectedMovies = state.selectedMovies.filter(movie => movie.id !== action.payload)
        },

        clearSelectedMovie: (state) => {
            state.selectedMovies = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNowPlayingMovie.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchNowPlayingMovie.fulfilled, (state, action: PayloadAction<INowPlayingMovie>) => {
            state.error = null;
            state.status = 'success';
            state.responseNowPlayingMovie = action.payload
        });
        builder.addCase(fetchNowPlayingMovie.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        });

        builder.addCase(fetchPopularMovie.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchPopularMovie.fulfilled, (state, action: PayloadAction<IPopularMovie>) => {
            state.error = null;
            state.status = 'success'
            state.responsePopularMovie = action.payload
        });
        builder.addCase(fetchPopularMovie.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        });

        builder.addCase(fetchUpcomingMovie.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchUpcomingMovie.fulfilled, (state, action: PayloadAction<IUpcomingMovie>) => {
            state.error = null;
            state.status = 'success'
            state.responseUpcomingMovie = action.payload
        });
        builder.addCase(fetchUpcomingMovie.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        });

        builder.addCase(fetchTopRatedMovie.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchTopRatedMovie.fulfilled, (state, action: PayloadAction<ITopRatedMovie>) => {
            state.error = null;
            state.status = 'success'
            state.responseTopRatedMovie = action.payload
        });
        builder.addCase(fetchTopRatedMovie.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        });

        builder.addCase(fetchMovieDetails.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchMovieDetails.fulfilled, (state, action: PayloadAction<IMovieDetails>) => {
            state.error = null;
            state.status = 'success'
            state.responseMovieDetails = action.payload
        });
        builder.addCase(fetchMovieDetails.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        });

        builder.addCase(fetchCreditsMovie.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchCreditsMovie.fulfilled, (state, action: PayloadAction<ICreditsMovie>) => {
            state.error = null;
            state.status = 'success'
            state.responseMovieCredits = action.payload
        });
        builder.addCase(fetchCreditsMovie.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        });

        builder.addCase(fetchRecommendationsMovie.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchRecommendationsMovie.fulfilled, (state, action: PayloadAction<IRecommendationMovie>) => {
            state.error = null;
            state.status = 'success'
            state.responseMovieRecommendations = action.payload
        });
        builder.addCase(fetchRecommendationsMovie.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        });

        builder.addCase(fetchDiscoverMovie.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchDiscoverMovie.fulfilled, (state, action: PayloadAction<IDiscoverMovie>) => {
            state.error = null;
            state.status = 'success'
            state.responseDiscoverMovie = action.payload
        });
        builder.addCase(fetchDiscoverMovie.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        });

        builder.addCase(fetchGenresMovie.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchGenresMovie.fulfilled, (state, action: PayloadAction<IGenres>) => {
            state.error = null;
            state.status = 'success'
            state.responseGenresMovie = action.payload
        });
        builder.addCase(fetchGenresMovie.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        });

        builder.addCase(fetchSearchMovie.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchSearchMovie.fulfilled, (state, action: PayloadAction<IMovies>) => {
            state.error = null;
            state.status = 'success'
            state.responseSearchMovie = action.payload
        });
        builder.addCase(fetchSearchMovie.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        });
    }
});

export const {
    clearResponseSearchMovie,
    addSelectedMovie,
    removeSelectedMovie,
    clearSelectedMovie
} = movieSlice.actions;

const movie = movieSlice.reducer;

export default movie