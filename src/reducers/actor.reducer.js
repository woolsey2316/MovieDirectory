import { searchConstants } from '../constants'

export function actors(state = {}, action) {
  switch (action.type) {
    case searchConstants.ACTOR_REQUEST:
      return { ...state, isFetching: true }
    case searchConstants.ACTOR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        actorResults: action.actorResults.results
      }
    case searchConstants.ACTOR_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}
