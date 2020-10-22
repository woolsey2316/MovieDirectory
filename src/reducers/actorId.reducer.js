import { actorConstants } from '../constants'

export function actor(state = {}, action) {
  switch (action.type) {
    case actorConstants.ACTOR_ID_REQUEST:
      return { ...state, isFetching: true }
    case actorConstants.ACTOR_ID_SUCCESS:
      return {
        isFetching: false,
        actor: action.actor
      }
    case actorConstants.ACTOR_ID_FAILURE:
      return { ...state, isFetching: false }
    case actorConstants.ACTOR_IMAGES_REQUEST:
      return { ...state, isFetching: true }
    case actorConstants.ACTOR_IMAGES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        actor: {
          ...state.actor,
          images: action.images
        }
      }
    case actorConstants.ACTOR_IMAGES_FAILURE:
      return { ...state, isFetching: false }
    case actorConstants.ACTOR_MOVIE_REQUEST:
      return { ...state, isFetching: true }
    case actorConstants.ACTOR_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        actor: {
          ...state.actor,
          movies: action.movies
        }
      }
    case actorConstants.ACTOR_MOVIE_FAILURE:
      return { ...state, isFetching: false }
    case actorConstants.ACTOR_TELEVISION_REQUEST:
      return { ...state, isFetching: true }
    case actorConstants.ACTOR_TELEVISION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        actor: {
          ...state.actor,
          tvShows: action.tvShows
        }
      }
    case actorConstants.ACTOR_TELEVISION_FAILURE:
      return { ...state, isFetching: false }

    default:
      return state
  }
}
