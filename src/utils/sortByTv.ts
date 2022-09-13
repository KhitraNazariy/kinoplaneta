import {ISortItem} from "../types/ISortItem";

export const sort: ISortItem[] = [
    {name: 'Популярні', query: 'popularity.desc'},
    {name: 'Непопулярні', query: 'popularity.asc'},
    {name: 'Спочатку нові', query: 'first_air_date.desc'},
    {name: 'Спочатку старі', query: 'first_air_date.asc'},
    {name: 'Рейтинг високий', query: 'vote_average.desc'},
    {name: 'Рейтинг низький', query: 'vote_average.asc'},
]