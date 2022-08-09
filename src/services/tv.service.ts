import {axiosService} from "./axios.service";
import {ITopRatedTv} from "../types/ITopRatedTv";
import {API_KEY, urls} from "../configs";

export const tvService = {
    getTopRated: () => axiosService.get<ITopRatedTv>
    (`${urls.topRatedTv}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data)
}