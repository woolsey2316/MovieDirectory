import { movieConstants } from '../constants'

export function televisions(state = {}, action) {
  switch (action.type) {
    case movieConstants.TELEVISION_REQUEST:
      return { ...state, isFetching: true }
    case movieConstants.TELEVISION_SUCCESS:
      return { ...state, isFetching: false, televisionResults: action.televisionResults.results }
    case movieConstants.TELEVISION_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}