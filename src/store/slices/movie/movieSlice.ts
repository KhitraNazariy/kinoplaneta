import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {INowPlayingMovie} from "../../../types/INowPlayingMovie";
import {fetchNowPlayingMovie} from "./asyncActions";


interface MovieSliceState {
    data: INowPlayingMovie;
    status: string;
    error: string | null
}

const initialState: MovieSliceState = {
    data: {} as INowPlayingMovie,
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
            state.data = action.payload
        });
        builder.addCase(fetchNowPlayingMovie.rejected, (state, {payload}) => {
            state.status = 'error'
            if (payload) {
                state.error = payload.message
            }
        });
    }
});

const movie = movieSlice.reducer;

export default movie