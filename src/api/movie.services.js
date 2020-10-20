import { IsValidJSONString } from '../helpers'
/*
  This section of the services layer relates to movie api. Searches for movies
  tv with certain parameters, popularity, genre and returns a search result list
*/
export const movieApi = {
  getReviews,
  getSimilarMovies,
  getRecommendedMovies,
  getCredits,
  getImages
}

/* 
  fetches all reviews belonging to a movie 
  */
async function getReviews(movieId) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

/* 
  fetches all cast and crew belonging to a movie 
  */
 async function getCredits(movieId) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

async function getSimilarMovies(movieId) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

async function getRecommendedMovies(movieId) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

async function getImages(movieId) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie/${movieId}/images?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

/* 
  checks if the http response from the api is 401 Unauthorized and 
  automatically logs the movie out. This handles if the JWT token expires 
  or is no longer valid for any reason.
*/
function handleResponse(response) {
  return response.text().then((text) => {
    const data = IsValidJSONString(text) ? JSON.parse(text) : text

    if (!response.ok) {
      console.log(`response: ${JSON.stringify(response)}`)
      // trying to get as much information about the error as can get
      const error = response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
