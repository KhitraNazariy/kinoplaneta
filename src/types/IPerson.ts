import {IMovie} from "./IMovie";
import {ITv} from "./ITv";

export interface IPerson {
    adult: boolean;
    gender: number;
    id: number;
    known_for: (IMovie | ITv) [];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}

// export interface IMoviePerson extends IMovie {
//     media_type: string;
// }
//
// export interface ITvPerson extends ITv {
//
// }