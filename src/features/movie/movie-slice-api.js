import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_MOVIE_DB_BASE_URL }),
  endpoints: (builder) => ({
    getMovieByName: builder.query({
      query: (name) => `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${name}`,
    }),
    getMovieRecommendations: builder.query({
      query: (movieId) => `movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getMovieCredits: builder.query({
      query: (movieId) => `movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getSimilarMovie: builder.query({
      query: (movieId) => `movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getMovieGallery: builder.query({
      query: (movieId) => `movie/${movieId}/images?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getMovieReviews: builder.query({
      query: (movieId) => `movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getMovieDetails: builder.query({
      query: (movieId) => `movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetMovieByNameQuery,
    useGetMovieRecommendationsQuery,
    useGetMovieCreditsQuery,
    useGetSimilarMovieQuery,
    useGetMovieReviewsQuery,
    useGetMovieDetailsQuery,
    useGetMovieGalleryQuery
  } = movieApi