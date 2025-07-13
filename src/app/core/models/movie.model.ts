import {CastCard} from "./cast.model";

export interface Genre {
  id: number;
  name: string;
}

export interface MovieCard {
  id: number,
  title: string,
  poster_path: string,
  release_date: string
}

export interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
  overview: string;
  tagline: string;
  genres: Genre[];
  cast : CastCard[];
  original_language:string;
}


