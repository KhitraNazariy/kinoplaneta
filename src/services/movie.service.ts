import {axiosService} from "./axios.service";
import {INowPlayingMovie} from "../types/INowPlayingMovie";
import {API_KEY, urls} from "../configs";
import {IPopularMovie} from "../types/IPopularMovie";

export const movieService = {
    getNowPlaying: () => axiosService.get<INowPlayingMovie>
    (`${urls.nowPlayingMovie}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getPopularMovie: (page: number) => axiosService.get<IPopularMovie>
    (`${urls.popularMovie}?api_key=${API_KEY}&language=uk&page=${page}`)
        .then(value => value.data)
}