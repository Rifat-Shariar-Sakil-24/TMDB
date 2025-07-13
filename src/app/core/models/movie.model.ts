export interface Genre {
  id: number;
  name: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  tagline: string;
  genres: Genre[];
  cast : CastMember[];
  original_language:string;
}


