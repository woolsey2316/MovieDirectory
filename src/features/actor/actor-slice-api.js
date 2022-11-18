import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const actorApi = createApi({
  reducerPath: 'actorApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_MOVIE_DB_BASE_URL }),
  endpoints: (builder) => ({
    getActorById: builder.query({
      query: (id) => `person/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetActorByIdQuery } = actorApi