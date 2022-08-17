export interface ITvDetails {
    adult: boolean;
    backdrop_path: string;
    created_by: ICreatedBy[];
    episode_run_time: number[];
    first_air_date: string;
    genres: IGenre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: ILastEpisodeToAir;
    name: string;
    next_episode_to_air: INextEpisodeToAir |null;
    networks: INetwork[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProductionCompany[];
    production_countries: IProductionCountry[];
    seasons: ISeason[];
    spoken_languages: ISpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

interface ICreatedBy {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
}

interface IGenre {
    id: number;
    name: string;
}

interface ILastEpisodeToAir {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: null;
    vote_average: number;
    vote_count: number;
}

interface INextEpisodeToAir {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number | null;
    season_number: number;
    show_id: number;
    still_path: null;
    vote_average: number;
    vote_count: number;
}

interface INetwork {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}

interface IProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

interface IProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface ISeason {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

interface ISpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}