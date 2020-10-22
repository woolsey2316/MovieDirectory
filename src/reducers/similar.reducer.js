import { movieConstants } from '../constants'
import { televisionConstants } from '../constants'

export function similar(state = {}, action) {
  switch (action.type) {
    case movieConstants.SIMILAR_MOVIE_REQUEST:
      return { ...state, isFetching: true }
    case movieConstants.SIMILAR_MOVIE_SUCCESS:
      return {
        isFetching: false,
        similar: action.movieList
      }
    case movieConstants.SIMILAR_MOVIE_FAILURE:
      return { ...state, isFetching: false }
    case televisionConstants.SIMILAR_TELEVISION_REQUEST:
      return { ...state, isFetching: true }
    case televisionConstants.SIMILAR_TELEVISION_SUCCESS:
      return {
        isFetching: false,
        similar: action.televisionList
      }
    case televisionConstants.SIMILAR_TELEVISION_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}
