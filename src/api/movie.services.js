import { IsValidJSONString } from '../helpers'
/*
  This section of the services layer relates to movie api. Searches for movies
  tv with certain parameters, popularity, genre and returns a search result list
*/
export const movieApi = {
  searchMoviebyId,
  searchTelevisionbyId,
  searchActorbyId
}

/* 
  fetches all information related to the current logged in movie
  address, roles, profile image etc
  */
async function searchMoviebyId(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie?api_key=${process.env.REACT_APP_API_KEY}${id}`,
    requestOptions
  )
  return handleResponse(response)
}

async function searchTelevisionbyId(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}tv?api_key=${process.env.REACT_APP_API_KEY}${id}`,
    requestOptions
  )
  return handleResponse(response)
}

async function searchActorbyId(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}actor?api_key=${process.env.REACT_APP_API_KEY}${id}`,
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
