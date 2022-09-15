import {axiosService} from "./axios.service";
import {INowPlayingMovie} from "../types/INowPlayingMovie";
import {API_KEY, urls} from "../configs";
import {IPopularMovie} from "../types/IPopularMovie";
import {IUpcomingMovie} from "../types/IUpcomingMovie";
import {ITopRatedMovie} from "../types/ITopRatedMovie";
import {IMovieDetails} from "../types/IMovieDetails";
import {ICreditsMovie} from "../types/ICreditsMovie";
import {IRecommendationMovie} from "../types/IRecommendationMovie";
import {IDiscoverMovie} from "../types/IDiscoverMovie";
import {IGenres} from "../types/IGenres";
import {IMovies} from "../types/IMovies";

export const movieService = {
    getNowPlaying: (page: number) => axiosService.get<INowPlayingMovie>
    (`${urls.nowPlayingMovie}?api_key=${API_KEY}&language=uk&page=${page}`)
        .then(value => value.data),
    getPopularMovie: (page: number) => axiosService.get<IPopularMovie>
    (`${urls.popularMovie}?api_key=${API_KEY}&language=uk&page=${page}`)
        .then(value => value.data),
    getUpcomingMovie: (page: number) => axiosService.get<IUpcomingMovie>
    (`${urls.upcomingMovie}?api_key=${API_KEY}&language=uk&page=${page}`)
        .then(value => value.data),
    getTopRatedMovie: (page: number) => axiosService.get<ITopRatedMovie>
    (`${urls.topRatedMovie}?api_key=${API_KEY}&language=uk&page=${page}`)
        .then(value => value.data),
    getMovieDetails: (id: string | undefined) => axiosService.get<IMovieDetails>
    (`/movie/${id}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getMovieCredits: (id: string | undefined) => axiosService.get<ICreditsMovie>
    (`/movie/${id}/credits?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getRecommendationsMovie: (id: string | undefined) => axiosService.get<IRecommendationMovie>
    (`/movie/${id}/recommendations?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getDiscoverMovie: (
        page: number,
        minValueVoteAv: number,
        maxValueVoteAv: number,
        minReleaseYear: number,
        maxReleaseYear: number,
        genreId: number | null,
        sortBy: string
    ) => axiosService.get<IDiscoverMovie>
    (`${urls.discoverMovie}?api_key=${API_KEY}&language=uk&page=${page}&vote_average.gte=${minValueVoteAv}&vote_average.lte=${maxValueVoteAv}&primary_release_date.gte=${minReleaseYear}-01-01&primary_release_date.lte=${maxReleaseYear}-01-01&sort_by=${sortBy}&with_genres=${genreId}`)
        .then(value => value.data),
    getGenres: () => axiosService.get<IGenres>
    (`${urls.genreMovieList}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getSearch: (query: string, page: number) => axiosService.get<IMovies>
    (`${urls.searchMovie}?api_key=${API_KEY}&language=uk&page=${page}&query=${query}`)
        .then(value => value.data)
}
