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
  getRecommendedMovies,
  getImages,
  getDetails
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
        dispatch(success(credits))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: movieConstants.MOVIE_CREDITS_REQUEST, id }
  }
  function success(credits) {
    return { type: movieConstants.MOVIE_CREDITS_SUCCESS, credits }
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

function getImages(id) {
  return (dispatch) => {
    dispatch(request(id))

    movieApi.getImages(id).then(
      (gallery) => {
        dispatch(success(gallery.posters))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: movieConstants.MOVIE_GALLERY_REQUEST, id }
  }
  function success(gallery) {
    return { type: movieConstants.MOVIE_GALLERY_SUCCESS, gallery }
  }
  function failure(error) {
    return { type: movieConstants.MOVIE_GALLERY_FAILURE, error }
  }
}

function getDetails(id) {
  return (dispatch) => {
    dispatch(request(id))

    movieApi.getDetails(id).then(
      (movie) => {
        dispatch(success(movie))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: movieConstants.MOVIE_ID_REQUEST, id }
  }
  function success(movie) {
    return { type: movieConstants.MOVIE_ID_SUCCESS, movie }
  }
  function failure(error) {
    return { type: movieConstants.MOVIE_ID_FAILURE, error }
  }
}
