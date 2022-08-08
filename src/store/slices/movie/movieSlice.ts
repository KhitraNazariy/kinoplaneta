import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {INowPlayingMovie} from "../../../types/INowPlayingMovie";
import {fetchNowPlayingMovie, fetchPopularMovie} from "./asyncActions";
import {IPopularMovie} from "../../../types/IPopularMovie";


interface MovieSliceState {
    responseNowPlayingMovie: INowPlayingMovie;
    responsePopularMovie: IPopularMovie;
    status: string;
    error: string | null
}

const initialState: MovieSliceState = {
    responseNowPlayingMovie: {} as INowPlayingMovie,
    responsePopularMovie: {} as IPopularMovie,
    status: '',
    error: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchNowPlayingMovie.pending, (state) => {
            state.status = 'loading'
        });
        builder.addCase(fetchNowPlayingMovie.fulfilled, (state, action: PayloadAction<INowPlayingMovie>) => {
            state.status = 'success'
            state.responseNowPlayingMovie = action.payload
        });
        builder.addCase(fetchNowPlayingMovie.rejected, (state, {payload}) => {
            state.status = 'error'
            if (payload) {
                state.error = payload.message
            }
        });

        builder.addCase(fetchPopularMovie.pending, (state) => {
            state.status = 'loading'
        });
        builder.addCase(fetchPopularMovie.fulfilled, (state, action: PayloadAction<IPopularMovie>) => {
            state.status = 'success'
            state.responsePopularMovie = action.payload
        });
        builder.addCase(fetchPopularMovie.rejected, (state, {payload}) => {
            state.status = 'error'
            if (payload) {
                state.error = payload.message
            }
        });
    }
});

const movie = movieSlice.reducer;

export default movie