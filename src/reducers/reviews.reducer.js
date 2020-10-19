import { movieConstants } from '../constants'
import { televisionConstants } from '../constants'

export function reviews(state = {}, action) {
  switch (action.type) {
    case movieConstants.MOVIE_REVIEW_REQUEST:
      return { ...state, isFetching: true }
    case movieConstants.MOVIE_REVIEW_SUCCESS:
      return {
        isFetching: false,
        reviews: action
      }
    case movieConstants.MOVIE_REVIEW_FAILURE:
      return { ...state, isFetching: false }
    case televisionConstants.TELEVISION_REVIEW_REQUEST:
      return { ...state, isFetching: true }
    case televisionConstants.TELEVISION_REVIEW_SUCCESS:
      return {
        isFetching: false,
        reviews: action
      }
    case televisionConstants.TELEVISION_REVIEW_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}