import { movieConstants } from '../constants'
import { televisionConstants } from '../constants'

export function credits(state = {}, action) {
  switch (action.type) {
    case movieConstants.MOVIE_CREDITS_REQUEST:
      return { ...state, isFetching: true }
    case movieConstants.MOVIE_CREDITS_SUCCESS:
      return {
        isFetching: false,
        credits: action.credits
      }
    case movieConstants.MOVIE_CREDITS_FAILURE:
      return { ...state, isFetching: false }
    case televisionConstants.TELEVISION_CREDITS_REQUEST:
      return { ...state, isFetching: true }
    case televisionConstants.TELEVISION_CREDITS_SUCCESS:
      return {
        isFetching: false,
        credits: action.credits
      }
    case televisionConstants.TELEVISION_CREDITS_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}
