import {configureStore} from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import {setupListeners} from '@reduxjs/toolkit/query';
import {actorApi} from '../features/actor/actor-slice-api';
import {movieApi} from '../features/movie/movie-slice-api';
import {televisionApi} from '../features/television/tv-slice-api';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [actorApi.reducerPath]: actorApi.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [televisionApi.reducerPath]: televisionApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      actorApi.middleware,
      movieApi.middleware,
      televisionApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg
// for customization
setupListeners(store.dispatch);
