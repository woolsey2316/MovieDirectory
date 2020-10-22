import { movieConstants, televisionConstants } from '../constants'

export function gallery(state = {}, action) {
  switch (action.type) {
    case movieConstants.MOVIE_GALLERY_REQUEST:
      return { ...state, isFetching: true }
    case movieConstants.MOVIE_GALLERY_SUCCESS:
      return {
        isFetching: false,
        gallery: action.gallery
      }
    case movieConstants.MOVIE_GALLERY_FAILURE:
      return { ...state, isFetching: false }
    case televisionConstants.TELEVISION_GALLERY_REQUEST:
      return { ...state, isFetching: true }
    case televisionConstants.TELEVISION_GALLERY_SUCCESS:
      return {
        isFetching: false,
        gallery: action.gallery
      }
    case televisionConstants.TELEVISION_GALLERY_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}
