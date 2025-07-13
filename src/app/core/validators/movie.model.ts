import { z } from 'zod';

// Genre Schema
export const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

// CastCard Schema
export const CastCardSchema = z.object({
  id: z.number(),
  name: z.string(),
  profile_path: z.string().nullable(),
  character: z.string(),
});

// MovieCard Schema (if needed elsewhere)
export const MovieCardSchema = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string(),
  release_date: z.string(),
  vote_average: z.number(),
});

// MovieDetails Schema
export const MovieDetailsSchema = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string(),
  release_date: z.string(),
  backdrop_path: z.string(),
  overview: z.string(),
  tagline: z.string(),
  genres: z.array(GenreSchema),
  credits: z.object({
    cast: z.array(CastCardSchema),
  }),
  original_language: z.string(),
});

// Export TypeScript type
export type MovieDetails = z.infer<typeof MovieDetailsSchema>;
export type MovieCard = z.infer<typeof MovieCardSchema>;
