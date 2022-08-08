import {createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../../../services";
import {INowPlayingMovie} from "../../../types/INowPlayingMovie";

type FetchTodosError = {
    message: string;
};

export const fetchNowPlayingMovie = createAsyncThunk<INowPlayingMovie, undefined, {rejectValue : FetchTodosError}>(
    'movie/fetchNowPlayingMovie',
    async (_, {rejectWithValue}) => {
        try {
            return await movieService.getNowPlaying()
        } catch (e) {
            return rejectWithValue({message: 'Errrrorrr'})
        }
    }
);