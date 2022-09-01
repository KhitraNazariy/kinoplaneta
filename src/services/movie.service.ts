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
    getDiscoverMovie: (page: number) => axiosService.get<IDiscoverMovie>
    (`${urls.discoverMovie}?api_key=${API_KEY}&language=uk&page=${page}`)
        .then(value => value.data)
}