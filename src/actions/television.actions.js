/* 
  Contains Redux action creators for actions related to televisions,
  Many actions are asyncronous since many television actions need to make http requests
  and wait for the response before completing.
*/
import { televisionConstants } from '../constants'
import { televisionApi } from '../api'

export const televisionActions = {
  getReviews,
  getCredits,
  getSimilarTelevisions,
  getRecommendedTelevisions,
  getImages,
  getDetails
}

function getReviews(id) {
  return (dispatch) => {
    dispatch(request(id))

    televisionApi.getReviews(id).then(
      (reviews) => {
        dispatch(success(reviews.results))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: televisionConstants.TELEVISION_REVIEW_REQUEST, id }
  }
  function success(reviews) {
    return { type: televisionConstants.TELEVISION_REVIEW_SUCCESS, reviews }
  }
  function failure(error) {
    return { type: televisionConstants.TELEVISION_REVIEW_FAILURE, error }
  }
}

function getCredits(id) {
  return (dispatch) => {
    dispatch(request(id))
    televisionApi.getCredits(id).then(
      (credits) => {
        dispatch(success(credits.cast))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: televisionConstants.TELEVISION_CREDITS_REQUEST, id }
  }
  function success(cast) {
    return { type: televisionConstants.TELEVISION_CREDITS_SUCCESS, cast }
  }
  function failure(error) {
    return { type: televisionConstants.TELEVISION_CREDITS_FAILURE, error }
  }
}

function getSimilarTelevisions(id) {
  return (dispatch) => {
    dispatch(request(id))
    televisionApi.getSimilarTelevisions(id).then(
      (televisionList) => {
        dispatch(success(televisionList.results))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }
  function request(id) {
    return { type: televisionConstants.SIMILAR_TELEVISION_REQUEST, id }
  }
  function success(televisionList) {
    return {
      type: televisionConstants.SIMILAR_TELEVISION_SUCCESS,
      televisionList
    }
  }
  function failure(error) {
    return { type: televisionConstants.SIMILAR_TELEVISION_FAILURE, error }
  }
}

function getRecommendedTelevisions(id) {
  return (dispatch) => {
    dispatch(request(id))

    televisionApi.getRecommendedTelevisions(id).then(
      (televisionList) => {
        dispatch(success(televisionList.results))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: televisionConstants.RECOMMENDED_TELEVISIONS_REQUEST, id }
  }
  function success(televisionList) {
    return {
      type: televisionConstants.RECOMMENDED_TELEVISIONS_SUCCESS,
      televisionList
    }
  }
  function failure(error) {
    return { type: televisionConstants.RECOMMENDED_TELEVISIONS_FAILURE, error }
  }
}

function getImages(id) {
  return (dispatch) => {
    dispatch(request(id))

    televisionApi.getImages(id).then(
      (gallery) => {
        dispatch(success(gallery.posters))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: televisionConstants.TELEVISION_GALLERY_REQUEST, id }
  }
  function success(gallery) {
    return { type: televisionConstants.TELEVISION_GALLERY_SUCCESS, gallery }
  }
  function failure(error) {
    return { type: televisionConstants.TELEVISION_GALLERY_FAILURE, error }
  }
}

function getDetails(id) {
  return (dispatch) => {
    dispatch(request(id))

    televisionApi.getDetails(id).then(
      (tvShow) => {
        dispatch(success(tvShow))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: televisionConstants.TV_ID_REQUEST, id }
  }
  function success(tvShow) {
    return { type: televisionConstants.TV_ID_SUCCESS, tvShow }
  }
  function failure(error) {
    return { type: televisionConstants.TV_ID_FAILURE, error }
  }
}
