import { movieConstants } from '../constants'

export function recommended(state = {}, action) {
  switch (action.type) {
    case movieConstants.RECOMMENDED_MOVIE_REQUEST:
      return { ...state, isFetching: true }
    case movieConstants.RECOMMENDED_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        recommended: action.movieList
      }
    case movieConstants.RECOMMENDED_MOVIE_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}