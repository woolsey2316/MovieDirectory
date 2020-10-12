import { movieConstants } from '../constants'

export function movies(state = {}, action) {
  switch (action.type) {
    case movieConstants.MOVIE_REQUEST:
      return { ...state, isFetching: true }
    case movieConstants.MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movieResults: action.movieResults.results
      }
    case movieConstants.MOVIE_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}
