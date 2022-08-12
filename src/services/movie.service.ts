import {axiosService} from "./axios.service";
import {INowPlayingMovie} from "../types/INowPlayingMovie";
import {API_KEY, urls} from "../configs";
import {IPopularMovie} from "../types/IPopularMovie";
import {IUpcomingMovie} from "../types/IUpcomingMovie";
import {ITopRatedMovie} from "../types/ITopRatedMovie";

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
        .then(value => value.data)
}