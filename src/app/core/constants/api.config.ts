const API_BASE_URL = 'https://api.themoviedb.org/3';

export const ApiEndpoints = {
  movieListBaseURL: `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`,
  movieDetails: (movieId: string | number) => `${API_BASE_URL}/movie/${movieId}`,
};
