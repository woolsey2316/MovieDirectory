import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const actorApi = createApi({
  reducerPath: 'actorApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_MOVIE_DB_BASE_URL }),
  endpoints: (builder) => ({
    getActorByName: builder.query({
      query: (name) => `search/person?api_key=${process.env.REACT_APP_API_KEY}&query=${name}`,
    }),
    getActorById: builder.query({
      query: (id) => `person/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getActorImagesById: builder.query({
      query: (id) => `person/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getMovieCreditsById: builder.query({
      query: (id) => `person/${id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getTelevisionCreditsById: builder.query({
      query: (id) => `person/${id}/tv_credits?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetActorByNameQuery, useGetActorByIdQuery, useGetActorImagesByIdQuery, useGetMovieCreditsByIdQuery, useGetTelevisionCreditsByIdQuery } = actorApi