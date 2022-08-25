import {axiosService} from "./axios.service";
import {IPopularPerson} from "../types/IPopularPerson";
import {urls, API_KEY} from "../configs";

export const personService = {
    getPopular: (page: number) => axiosService.get<IPopularPerson>
    (`${urls.popularPerson}?api_key=${API_KEY}&language=uk&page=${page}`)
        .then(value => value.data)
}