/* 
  Contains Redux action creators for actions related to movies,
  Many actions are asyncronous since many movie actions need to make http requests
  and wait for the response before completing.
*/
import { actorConstants } from '../constants'
import { actorApi } from '../api'

export const actorActions = {
  getDetails,
  getImages,
  getMovieCredits,
  getTelevisionCredits
}

function getDetails(id) {
  return (dispatch) => {
    dispatch(request(id))

    actorApi.getDetails(id).then(
      (movie) => {
        dispatch(success(movie))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: actorConstants.ACTOR_ID_REQUEST, id }
  }
  function success(actor) {
    return { type: actorConstants.ACTOR_ID_SUCCESS, actor }
  }
  function failure(error) {
    return { type: actorConstants.ACTOR_ID_FAILURE, error }
  }
}

function getImages(id) {
  return (dispatch) => {
    dispatch(request(id))

    actorApi.getImages(id).then(
      (images) => {
        dispatch(success(images))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: actorConstants.ACTOR_IMAGES_REQUEST, id }
  }
  function success(images) {
    return { type: actorConstants.ACTOR_IMAGES_SUCCESS, images }
  }
  function failure(error) {
    return { type: actorConstants.ACTOR_IMAGES_FAILURE, error }
  }
}

function getMovieCredits(id) {
  return (dispatch) => {
    dispatch(request(id))

    actorApi.getMovieCredits(id).then(
      (movies) => {
        dispatch(success(movies))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: actorConstants.ACTOR_MOVIE_REQUEST, id }
  }
  function success(movies) {
    return { type: actorConstants.ACTOR_MOVIE_SUCCESS, movies }
  }
  function failure(error) {
    return { type: actorConstants.ACTOR_MOVIE_FAILURE, error }
  }
}

function getTelevisionCredits(id) {
  return (dispatch) => {
    dispatch(request(id))

    actorApi.getTelevisionCredits(id).then(
      (tvShows) => {
        dispatch(success(tvShows))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: actorConstants.ACTOR_TELEVISION_REQUEST, id }
  }
  function success(tvShows) {
    return { type: actorConstants.ACTOR_TELEVISION_SUCCESS, tvShows }
  }
  function failure(error) {
    return { type: actorConstants.ACTOR_TELEVISION_FAILURE, error }
  }
}
