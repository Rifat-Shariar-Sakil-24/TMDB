

export const ApiEndpoints = {
  movieListBaseURL: `/discover/movie?sort_by=popularity.desc`,
  movieDetails: (movieId: string | number) => `/movie/${movieId}?append_to_response=credits`,
};
