import { movieConstants } from '../constants'

export function similar(state = {}, action) {
  switch (action.type) {
    case movieConstants.SIMILAR_MOVIE_REQUEST:
      return { ...state, isFetching: true }
    case movieConstants.SIMILAR_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        similar: action.movieList
      }
    case movieConstants.SIMILAR_MOVIE_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}