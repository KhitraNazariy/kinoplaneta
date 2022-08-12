import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../../services";
import {INowPlayingMovie} from "../../../types/INowPlayingMovie";
import {IPopularMovie} from "../../../types/IPopularMovie";

interface FetchTodosError {
    message: string;
}

interface PopularMovieProps {
    page: number
}

interface NowPlayingMovieProps {
    page: number;
}

export const fetchNowPlayingMovie = createAsyncThunk<INowPlayingMovie, NowPlayingMovieProps, {rejectValue: FetchTodosError}>(
    'movie/fetchNowPlayingMovie',
    async ({page}, {rejectWithValue}) => {
        try {
            return await movieService.getNowPlaying(page)
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