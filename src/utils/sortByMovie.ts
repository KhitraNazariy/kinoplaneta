import {ISortItem} from "../types/ISortItem";

export const sort: ISortItem[] = [
    {name: 'Популярні', query: 'popularity.desc'},
    {name: 'Непопулярні', query: 'popularity.asc'},
    {name: 'Спочатку нові', query: 'release_date.desc'},
    {name: 'Спочатку старі', query: 'release_date.asc'},
    {name: 'Найбільший дохід', query: 'revenue.desc'},
    {name: 'Найменший дохід', query: 'revenue.asc'},
    {name: 'Рейтинг високий', query: 'vote_average.desc'},
    {name: 'Рейтинг низький', query: 'vote_average.asc'},
    {name: 'Найбільша кількість голосів', query: 'vote_count.desc'},
    {name: 'Найменша кількість голосів', query: 'vote_count.asc'},
]