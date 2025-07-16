import { MovieCard } from "../validators/movie.model";

export interface PersonCard {
  id: number;
  name: string;
  character: string;
  biography: string,
  birthday: string,
  deathday:string,
  movie_credits: {
    cast : MovieCard[]
  }
  profile_path: string | null;
}
