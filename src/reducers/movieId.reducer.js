import { movieConstants } from '../constants'

export function movie(state = {}, action) {
  switch (action.type) {
    case movieConstants.MOVIE_ID_REQUEST:
      return { ...state, isFetching: true }
    case movieConstants.MOVIE_ID_SUCCESS:
      return {
        isFetching: false,
        movie: action.movie
      }
    case movieConstants.MOVIE_ID_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}
