import {axiosService} from "./axios.service";
import {ITopRatedTv} from "../types/ITopRatedTv";
import {API_KEY, urls} from "../configs";
import {IPopularTv} from "../types/IPopularTv";

export const tvService = {
    getTopRated: () => axiosService.get<ITopRatedTv>
    (`${urls.topRatedTv}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getPopularTv: () => axiosService.get<IPopularTv>
    (`${urls.popularTv}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data)
}