import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const televisionApi = createApi({
  reducerPath: 'televisionApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_MOVIE_DB_BASE_URL }),
  endpoints: (builder) => ({
    getTelevisionByName: builder.query({
      query: (name) => `search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${name}`,
    }),
    getTelevisionById: builder.query({
      query: (tvId) => `tv/${tvId}?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getTelevisionReviews: builder.query({
      query: (tvId) => `tv/${tvId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getTelevisionCredits: builder.query({
      query: (tvId) => `tv/${tvId}/credits?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getSimilarTelevision: builder.query({
      query: (tvId) => `tv/${tvId}/similar?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getTelevisionImages: builder.query({
      query: (tvId) => `tv/${tvId}/images?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetTelevisionByNameQuery,
  useGetTelevisionReviewsQuery,
  useGetTelevisionCreditsQuery,
  useGetSimilarTelevisionQuery,
  useGetTelevisionImagesQuery,
  useGetTelevisionByIdQuery 
} = televisionApi