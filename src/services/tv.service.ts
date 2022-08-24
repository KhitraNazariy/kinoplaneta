import {axiosService} from "./axios.service";
import {ITopRatedTv} from "../types/ITopRatedTv";
import {API_KEY, urls} from "../configs";
import {IPopularTv} from "../types/IPopularTv";
import {IAiringTodayTv} from "../types/IAiringTodayTv";
import {IOnTheAirTv} from "../types/IOnTheAirTv";
import {ITvDetails} from "../types/ITvDetails";
import {IRecommendationTv} from "../types/IRecommendationTv";

export const tvService = {
    getTopRated: (page: number) => axiosService.get<ITopRatedTv>
    (`${urls.topRatedTv}?api_key=${API_KEY}&language=uk&page=${page}`)
        .then(value => value.data),
    getPopularTv: (page: number) => axiosService.get<IPopularTv>
    (`${urls.popularTv}?api_key=${API_KEY}&language=uk&page=${page}`)
        .then(value => value.data),
    getAiringToday: (page: number) => axiosService.get<IAiringTodayTv>
    (`${urls.airingTodayTv}?api_key=${API_KEY}&language=uk&page=${page}`)
        .then(value => value.data),
    getOnTheAir: (page: number) => axiosService.get<IOnTheAirTv>
    (`${urls.onTheAirTv}?api_key=${API_KEY}&language=uk&page=${page}`)
        .then(value => value.data),
    getTvDetails: (id: string | undefined) => axiosService.get<ITvDetails>
    (`/tv/${id}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getRecommendationsTv: (id: string | undefined) => axiosService.get<IRecommendationTv>
    (`/tv/${id}/recommendations?api_key=${API_KEY}&language=uk`)
        .then(value => value.data)
}