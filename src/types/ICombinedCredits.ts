export interface ICombinedCredits {
    cast: ICombineCreditsCast[];
    crew: ICombineCreditsCrew[];
    id: number;
}

export interface ICombineCreditsCast {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    character: string;
    credit_id: string;
    order: number
    media_type: string;
}

interface ICombineCreditsCrew {
    adult: boolean;
    backdrop_path: null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credit_id: string;
    department: string;
    job: string;
    media_type: string;
}