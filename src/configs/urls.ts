const baseURL = 'https://api.themoviedb.org/3';

export const API_KEY = '78944b79c48d0b33ca2920b8c5d42439';
export const URL_IMG = 'https://image.tmdb.org/t/p/original'

export const urls = {
    nowPlayingMovie: '/movie/now_playing',
    popularMovie: '/movie/popular',
    upcomingMovie: '/movie/upcoming',
    topRatedMovie: '/movie/top_rated',
    discoverMovie: '/discover/movie',
    genreMovieList: '/genre/movie/list',
    searchMovie: '/search/movie',

    topRatedTv: '/tv/top_rated',
    popularTv: '/tv/popular',
    airingTodayTv: '/tv/airing_today',
    onTheAirTv: '/tv/on_the_air',
    discoverTv: '/discover/tv',
    genreTvList: '/genre/tv/list',

    popularPerson: '/person/popular',
    combinedCreditsPerson: '/combined_credits'
}

export default baseURL