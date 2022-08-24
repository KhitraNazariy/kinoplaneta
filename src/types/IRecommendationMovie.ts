import {IData} from "./IData";
import {IMovie} from "./IMovie";

export interface IRecommendationMovie extends IData{
    results: IMovie[];
}