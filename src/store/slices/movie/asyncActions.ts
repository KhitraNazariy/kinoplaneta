import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../../services";
import {INowPlayingMovie} from "../../../types/INowPlayingMovie";
import {IPopularMovie} from "../../../types/IPopularMovie";
import {IUpcomingMovie} from "../../../types/IUpcomingMovie";
import {ITopRatedMovie} from "../../../types/ITopRatedMovie";
import {IMovieDetails} from "../../../types/IMovieDetails";
import {ICreditsMovie} from "../../../types/ICreditsMovie";
import {IRecommendationMovie} from "../../../types/IRecommendationMovie";
import {IDiscoverMovie} from "../../../types/IDiscoverMovie";

interface FetchTodosError {
    message: string;
}

interface DiscoverMovie {
    page: number;
    minValueVoteAv: number;
    maxValueVoteAv: number;
    minReleaseYear: number
    maxReleaseYear: number;
}

export const fetchNowPlayingMovie = createAsyncThunk<INowPlayingMovie, { page: number }, { rejectValue: FetchTodosError }>(
    'movie/fetchNowPlayingMovie',
    async ({page}, {rejectWithValue}) => {
        try {
            return await movieService.getNowPlaying(page)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
);


export const fetchPopularMovie = createAsyncThunk<IPopularMovie, { page: number }, { rejectValue: FetchTodosError }>(
    'movie/fetchPopularMovie',
    async ({page}, {rejectWithValue}) => {
        try {
            return await movieService.getPopularMovie(page)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
);


export const fetchUpcomingMovie = createAsyncThunk<IUpcomingMovie, { page: number }, { rejectValue: FetchTodosError }>(
    'movie/fetchUpcomingMovie',
    async ({page}, {rejectWithValue}) => {
        try {
            return await movieService.getUpcomingMovie(page)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
);


export const fetchTopRatedMovie = createAsyncThunk<ITopRatedMovie, { page: number }, { rejectValue: FetchTodosError }>(
    'movie/fetchTopRatedMovie',
    async ({page}, {rejectWithValue}) => {
        try {
            return await movieService.getTopRatedMovie(page)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)


export const fetchMovieDetails = createAsyncThunk<IMovieDetails, { id: string | undefined }, { rejectValue: FetchTodosError }>(
    'movie/fetchMovieDetails',
    async ({id}, {rejectWithValue}) => {
        try {
            return await movieService.getMovieDetails(id)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)

export const fetchCreditsMovie = createAsyncThunk<ICreditsMovie, { id: string | undefined }, { rejectValue: FetchTodosError }>(
    'movie/fetchCreditsMovie',
    async ({id}, {rejectWithValue}) => {
        try {
            return await movieService.getMovieCredits(id)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)

export const fetchRecommendationsMovie = createAsyncThunk<IRecommendationMovie,
    { id: string | undefined },
    { rejectValue: FetchTodosError }>
(
    'movie/fetchRecommendationsMovie',
    async ({id}, {rejectWithValue}) => {
        try {
            return await movieService.getRecommendationsMovie(id)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)

export const fetchDiscoverMovie = createAsyncThunk<IDiscoverMovie, DiscoverMovie, { rejectValue: FetchTodosError }>(
    'movie/fetchDiscoverMovie',
    async ({
               page,
               minValueVoteAv,
               maxValueVoteAv,
               minReleaseYear,
               maxReleaseYear
           }, {rejectWithValue}) => {
        try {
            return await movieService.getDiscoverMovie(
                page,
                minValueVoteAv,
                maxValueVoteAv,
                minReleaseYear,
                maxReleaseYear
            )
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)