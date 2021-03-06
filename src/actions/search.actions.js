/* 
  Contains Redux action creators for actions related to movies,
  Many actions are asyncronous since many movie actions need to make http requests
  and wait for the response before completing.
*/
import { searchConstants } from '../constants'
import { searchApi } from '../api'

export const searchActions = {
  getMovie,
  getActor,
  getTelevision
}

function getMovie(search) {
  return (dispatch) => {
    dispatch(request(search))

    searchApi.searchMovie(search).then(
      (movie) => {
        dispatch(success(movie))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(search) {
    return { type: searchConstants.MOVIE_REQUEST, search }
  }
  function success(movieResults) {
    return { type: searchConstants.MOVIE_SUCCESS, movieResults }
  }
  function failure(error) {
    return { type: searchConstants.MOVIE_FAILURE, error }
  }
}

function getActor(search) {
  return (dispatch) => {
    dispatch(request(search))
    searchApi.searchActor(search).then(
      (movieInfo) => {
        dispatch(success(movieInfo))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }
  function request(search) {
    return { type: searchConstants.ACTOR_REQUEST, search }
  }
  function success(actorResults) {
    return { type: searchConstants.ACTOR_SUCCESS, actorResults }
  }
  function failure(error) {
    return { type: searchConstants.ACTOR_FAILURE, error }
  }
}

function getTelevision(search) {
  return (dispatch) => {
    dispatch(request(search))

    searchApi.searchTelevision(search).then(
      (movieList) => {
        dispatch(success(movieList))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(search) {
    return { type: searchConstants.TELEVISION_REQUEST, search }
  }
  function success(televisionResults) {
    return { type: searchConstants.TELEVISION_SUCCESS, televisionResults }
  }
  function failure(error) {
    return { type: searchConstants.TELEVISION_FAILURE, error }
  }
}
