/* 
  Contains Redux action creators for actions related to movies,
  Many actions are asyncronous since many movie actions need to make http requests
  and wait for the response before completing.
*/
import { movieConstants } from '../constants'
import { movieApi } from '../api'

export const movieActions = {
  getReviews,
  getCredits,
  getSimilarMovies,
  getRecommendedMovies
}

function getReviews(id) {
  return (dispatch) => {
    dispatch(request(id))

    movieApi.getReviews(id).then(
      (reviews) => {
        dispatch(success(reviews.results))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: movieConstants.MOVIE_REVIEW_REQUEST, id }
  }
  function success(reviews) {
    return { type: movieConstants.MOVIE_REVIEW_SUCCESS, reviews }
  }
  function failure(error) {
    return { type: movieConstants.MOVIE_REVIEW_FAILURE, error }
  }
}

function getCredits(id) {
  return (dispatch) => {
    dispatch(request(id))
    movieApi.getCredits(id).then(
      (credits) => {
        dispatch(success(credits.cast))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: movieConstants.MOVIE_CREDITS_REQUEST, id }
  }
  function success(cast) {
    return { type: movieConstants.MOVIE_CREDITS_SUCCESS, cast }
  }
  function failure(error) {
    return { type: movieConstants.MOVIE_CREDITS_FAILURE, error }
  }
}

function getSimilarMovies(id) {
  return (dispatch) => {
    dispatch(request(id))
    movieApi.getSimilarMovies(id).then(
      (movieList) => {
        dispatch(success(movieList.results))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }
  function request(id) {
    return { type: movieConstants.SIMILAR_MOVIE_REQUEST, id }
  }
  function success(movieList) {
    return { type: movieConstants.SIMILAR_MOVIE_SUCCESS, movieList }
  }
  function failure(error) {
    return { type: movieConstants.SIMILAR_MOVIE_FAILURE, error }
  }
}

function getRecommendedMovies(id) {
  return (dispatch) => {
    dispatch(request(id))

    movieApi.getRecommendedMovies(id).then(
      (movieList) => {
        dispatch(success(movieList.results))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: movieConstants.RECOMMENDED_MOVIES_REQUEST, id }
  }
  function success(movieList) {
    return { type: movieConstants.RECOMMENDED_MOVIES_SUCCESS, movieList }
  }
  function failure(error) {
    return { type: movieConstants.RECOMMENDED_MOVIES_FAILURE, error }
  }
}
