import { IsValidJSONString } from '../helpers'
/*
  This section of the services layer relates to movie api. Searches for movies
  tv with certain parameters, popularity, genre and returns a search result list
*/
export const actorApi = {
  getDetails,
  getImages,
  getMovieCredits,
  getTelevisionCredits
}

async function getDetails(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_MOVIE_DB_BASE_URL}/person/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

async function getImages(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_MOVIE_DB_BASE_URL}/person/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

async function getMovieCredits(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_MOVIE_DB_BASE_URL}/person/${id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

async function getTelevisionCredits(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_MOVIE_DB_BASE_URL}/person/${id}/tv_credits?api_key=${process.env.REACT_APP_API_KEY}`,
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
