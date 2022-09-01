import {IData} from "./IData";
import {IMovie} from "./IMovie";

export interface IDiscoverMovie extends IData{
    results: IMovie[]
}