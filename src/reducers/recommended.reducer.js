import { movieConstants } from '../constants'
import { televisionConstants } from '../constants'

export function recommended(state = {}, action) {
  switch (action.type) {
    case movieConstants.RECOMMENDED_MOVIE_REQUEST:
      return { ...state, isFetching: true }
    case movieConstants.RECOMMENDED_MOVIE_SUCCESS:
      return {
        isFetching: false,
        recommended: action.movieList
      }
    case movieConstants.RECOMMENDED_MOVIE_FAILURE:
      return { ...state, isFetching: false }
    case televisionConstants.RECOMMENDED_TELEVISION_REQUEST:
      return { ...state, isFetching: true }
    case televisionConstants.RECOMMENDED_TELEVISION_SUCCESS:
      return {
        isFetching: false,
        recommended: action.televisionList
      }
    case televisionConstants.RECOMMENDED_TELEVISION_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}
