import { environment } from './../../../environments/environment';

const API_BASE_URL = environment.production
  ? 'https://api.themoviedb.org/3'
  : '';

export const ApiEndpoints = {
  movieListBaseURL: `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`,
  movieDetails: (movieId: string | number) =>
    `${API_BASE_URL}/movie/${movieId}?append_to_response=credits`,
  searchSuggestions: (query: string) =>
  `${API_BASE_URL}/search/multi?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(query)}`,
  genresList: `${API_BASE_URL}/genre/movie/list`,
  movieCertifications: `${API_BASE_URL}/certification/movie/list`
};



