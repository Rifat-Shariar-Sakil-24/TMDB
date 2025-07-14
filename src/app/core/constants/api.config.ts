import { environment } from './../../../environments/environment';

const API_BASE_URL = environment.production
  ? 'https://api.themoviedb.org/3'
  : '';

export const ApiEndpoints = {
  movieListBaseURL: `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`,
  movieDetails: (movieId: string | number) =>
    `${API_BASE_URL}/movie/${movieId}?append_to_response=credits`,
};



