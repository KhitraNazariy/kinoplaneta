import {IData} from "./IData";
import {IDates} from "./IDates";
import {IMovie} from "./IMovie";

export interface IUpcomingMovie extends IData{
    dates: IDates
    results: IMovie[]
}