import {IData} from "./IData";
import {IMovie} from "./IMovie";

export interface IPopularMovie extends IData{
    results: IMovie
}