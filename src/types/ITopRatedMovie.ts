import {IData} from "./IData";
import {IMovie} from "./IMovie";

export interface ITopRatedMovie extends IData{
    results: IMovie[]
}