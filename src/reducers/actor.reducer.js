import { movieConstants } from '../constants'

export function actors(state = {}, action) {
  switch (action.type) {
    case movieConstants.ACTOR_REQUEST:
      return { ...state, isFetching: true }
    case movieConstants.ACTOR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        actorResults: action.actorResults.results
      }
    case movieConstants.ACTOR_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}