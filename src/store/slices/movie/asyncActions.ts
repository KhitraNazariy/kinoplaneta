import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../../services";
import {INowPlayingMovie} from "../../../types/INowPlayingMovie";
import {IPopularMovie} from "../../../types/IPopularMovie";

type FetchTodosError = {
    message: string;
};

type PopularMovieProps = {
    page: number
}

export const fetchNowPlayingMovie = createAsyncThunk<INowPlayingMovie, undefined, {rejectValue: FetchTodosError}>(
    'movie/fetchNowPlayingMovie',
    async (_, {rejectWithValue}) => {
        try {
            return await movieService.getNowPlaying()
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
);


export const fetchPopularMovie = createAsyncThunk<IPopularMovie, PopularMovieProps, {rejectValue: FetchTodosError}>(
    'movie/fetchPopularMovie',
    async ({page}, {rejectWithValue}) => {
        try {
            return await movieService.getPopularMovie(page)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
);