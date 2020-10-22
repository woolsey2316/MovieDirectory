import { televisionConstants } from '../constants'

export function tvShow(state = {}, action) {
  switch (action.type) {
    case televisionConstants.TV_ID_REQUEST:
      return { ...state, isFetching: true }
    case televisionConstants.TV_ID_SUCCESS:
      return {
        isFetching: false,
        tvShow: action.tvShow
      }
    case televisionConstants.TV_ID_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}
