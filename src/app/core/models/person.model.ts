import { MovieCard } from "./movie.model";


export interface PersonCard {
  id?: number;
  name?: string;
  character?: string;
  biography?: string;
  birthday?: string;
  deathday?:string;
  cast : MovieCard[];
  profile_path?: string | null;
}
