import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {INowPlayingMovie} from "../../../types/INowPlayingMovie";
import {
    fetchCreditsMovie,
    fetchMovieDetails,
    fetchNowPlayingMovie,
    fetchPopularMovie,
    fetchTopRatedMovie,
    fetchUpcomingMovie
} from "./asyncActions";
import {IPopularMovie} from "../../../types/IPopularMovie";
import {IUpcomingMovie} from "../../../types/IUpcomingMovie";
import {ITopRatedMovie} from "../../../types/ITopRatedMovie";
import {IMovieDetails} from "../../../types/IMovieDetails";
import {ICreditsMovie} from "../../../types/ICreditsMovie";


interface MovieSliceState {
    responseNowPlayingMovie: INowPlayingMovie;
    responsePopularMovie: IPopularMovie;
    responseUpcomingMovie: IUpcomingMovie;
    responseTopRatedMovie: ITopRatedMovie;
    responseMovieDetails: IMovieDetails;
    responseMovieCredits: ICreditsMovie;
    status: string;
    error: string | null
}

const initialState: MovieSliceState = {
    responseNowPlayingMovie: {} as INowPlayingMovie,
    responsePopularMovie: {} as IPopularMovie,
    responseUpcomingMovie: {} as IUpcomingMovie,
    responseTopRatedMovie: {} as ITopRatedMovie,
    responseMovieDetails: {} as IMovieDetails,
    responseMovieCredits: {} as ICreditsMovie,
    status: '',
    error: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{},
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
            state.status = 'error';
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
            state.status = 'error';
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
            state.status = 'error';
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
            state.status = 'error';
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
            state.status = 'error';
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
            state.status = 'error';
            if (payload) {
                state.error = payload.message
            }
        });
    }
});

const movie = movieSlice.reducer;

export default movie