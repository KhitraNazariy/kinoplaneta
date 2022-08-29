import {axiosService} from "./axios.service";
import {IPopularPerson} from "../types/IPopularPerson";
import {urls, API_KEY} from "../configs";
import {IPersonDetails} from "../types/IPersonDetails";
import {ICombinedCredits} from "../types/ICombinedCredits";

export const personService = {
    getPopular: (page: number) => axiosService.get<IPopularPerson>
    (`${urls.popularPerson}?api_key=${API_KEY}&language=uk&page=${page}`)
        .then(value => value.data),
    getDetails: (id: string | undefined) => axiosService.get<IPersonDetails>
    (`/person/${id}?api_key=${API_KEY}&language=en-US`)
        .then(value => value.data),
    getCombinedCredits: (id: string | undefined) => axiosService.get<ICombinedCredits>
    (`/person/${id}/${urls.combinedCreditsPerson}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data)
}