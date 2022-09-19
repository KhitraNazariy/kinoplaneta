import {axiosService} from "./axios.service";
import {ITopRatedTv} from "../types/ITopRatedTv";
import {API_KEY, urls} from "../configs";
import {IPopularTv} from "../types/IPopularTv";
import {IAiringTodayTv} from "../types/IAiringTodayTv";
import {IOnTheAirTv} from "../types/IOnTheAirTv";
import {ITvDetails} from "../types/ITvDetails";
import {IRecommendationTv} from "../types/IRecommendationTv";
import {ICreditsTv} from "../types/ICreditsTv";
import {IDiscoverTv} from "../types/IDiscoverTv";
import {IGenres} from "../types/IGenres";
import {ITvs} from "../types/ITvs";

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
        .then(value => value.data),
    getTvCredits: (id: string | undefined) => axiosService.get<ICreditsTv>
    (`/tv/${id}/credits?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getDiscover: (
        page: number,
        minValueVoteAv: number,
        maxValueVoteAv: number,
        minReleaseYear: number,
        maxReleaseYear: number,
        genreId: number | null,
        sortBy: string
    ) => axiosService.get<IDiscoverTv>
    (`${urls.discoverTv}?api_key=${API_KEY}&language=uk&page=${page}&vote_average.gte=${minValueVoteAv}&vote_average.lte=${maxValueVoteAv}&first_air_date.gte=${minReleaseYear}-01-01&first_air_date.lte=${maxReleaseYear}-01-01&sort_by=${sortBy}&with_genres=${genreId}`)
        .then(value => value.data),
    getGenres: () => axiosService.get<IGenres>
    (`${urls.genreTvList}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getSearch: (query: string, page: number) => axiosService.get<ITvs>
    (`${urls.searchTv}?api_key=${API_KEY}&language=uk&page=${page}&query=${query}`)
        .then(value => value.data)
}