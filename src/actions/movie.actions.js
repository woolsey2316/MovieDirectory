/* 
  Contains Redux action creators for actions related to movies,
  Many actions are asyncronous since many movie actions need to make http requests
  and wait for the response before completing.
*/
import { movieConstants } from '../constants'
import { movieApi } from '../api'

import { redirect } from '../helpers'

export const movieActions = {
  getMovie,
  getActor,
  getTelevision,
}

function getMovie(id) {
  return (dispatch) => {
    dispatch(request(id))

    movieApi.searchMoviebyId(id).then(
      (movie) => {
        dispatch(success(movie))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: movieConstants.MOVIE_REQUEST, id }
  }
  function success(movie) {
    return { type: movieConstants.MOVIE_SUCCESS, movie }
  }
  function failure(error) {
    return { type: movieConstants.MOVIE_FAILURE, error }
  }
}

function getActor(id) {
  return (dispatch) => {
    dispatch(request(id))
    movieApi.searchActorbyId(id).then(
      (movieInfo) => {
        dispatch(success(movieInfo))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }
  function request(id) {
    return { type: movieConstants.ACTOR_REQUEST, id }
  }
  function success(movies) {
    return { type: movieConstants.ACTOR_SUCCESS, movies }
  }
  function failure(error) {
    return { type: movieConstants.ACTOR_FAILURE, error }
  }
}

function getTelevision(id) {
  return (dispatch) => {
    dispatch(request(id))

    movieApi.searchTelevisionbyId(id).then(
      (movieList) => {
        dispatch(success(movieList))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: movieConstants.TELEVISION_REQUEST, id }
  }
  function success(movieList) {
    return { type: movieConstants.TELEVISION_SUCCESS, movieList }
  }
  function failure(error) {
    return { type: movieConstants.TELEVISION_FAILURE, error }
  }
}
