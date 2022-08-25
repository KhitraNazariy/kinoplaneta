import {IData} from "./IData";
import {IPerson} from "./IPerson";

export interface IPopularPerson extends IData{
    results: IPerson[]
}