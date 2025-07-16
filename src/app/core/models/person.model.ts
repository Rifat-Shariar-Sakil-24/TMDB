import { MovieCard } from "./movie.model";


export interface PersonCard {
  id?: number;
  name?: string;
  character?: string;
  biography?: string;
  birthday?: string;
  deathday?: string;
  cast: MovieCard[];
  profile_path?: string | null;
  known_for_department?: string;
  gender?: number;
  place_of_birth?: string;
  also_known_as?:string
}
