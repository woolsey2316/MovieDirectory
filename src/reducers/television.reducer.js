import { searchConstants } from '../constants'

export function televisions(state = {}, action) {
  switch (action.type) {
    case searchConstants.TELEVISION_REQUEST:
      return { ...state, isFetching: true }
    case searchConstants.TELEVISION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        televisionResults: action.televisionResults.results
      }
    case searchConstants.TELEVISION_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}
