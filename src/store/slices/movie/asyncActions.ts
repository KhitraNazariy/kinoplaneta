import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../../services";
import {INowPlayingMovie} from "../../../types/INowPlayingMovie";
import {IPopularMovie} from "../../../types/IPopularMovie";
import {IUpcomingMovie} from "../../../types/IUpcomingMovie";
import {ITopRatedMovie} from "../../../types/ITopRatedMovie";

interface FetchTodosError {
    message: string;
}

interface PopularMovieProps {
    page: number
}

interface NowPlayingMovieProps {
    page: number;
}

interface UpcomingMovieProps {
    page: number;
}

interface TopRatedMovieProps {
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


export const fetchUpcomingMovie = createAsyncThunk<IUpcomingMovie, UpcomingMovieProps, {rejectValue: FetchTodosError}>(
    'movie/fetchUpcomingMovie',
    async ({page}, {rejectWithValue}) => {
        try {
            return await movieService.getUpcomingMovie(page)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
);


export const fetchTopRatedMovie = createAsyncThunk<ITopRatedMovie, TopRatedMovieProps, {rejectValue: FetchTodosError}>(
    'movie/fetchTopRatedMovie',
    async ({page}, {rejectWithValue}) => {
        try {
            return await movieService.getTopRatedMovie(page)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)