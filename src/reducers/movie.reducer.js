import { searchConstants } from '../constants'

export function movies(state = {}, action) {
  switch (action.type) {
    case searchConstants.MOVIE_REQUEST:
      return { ...state, isFetching: true }
    case searchConstants.MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movieResults: action.movieResults.results
      }
    case searchConstants.MOVIE_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}
