import {IData} from "./IData";
import {ITv} from "./ITv";

export interface IAiringTodayTv extends IData{
    results: ITv[]
}