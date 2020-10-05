import { IsValidJSONString } from '../helpers'
/*
  This section of the services layer relates to discover api. Searches for movies
  tv with certain parameters, popularity, genre and returns a search result list
*/
export const api = {
  searchMoviebyId,
  searchTelevisionbyId,
  searchActorbyId
}

/*
async function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/movies/${id}`,
    requestOptions
  )
  return handleResponse(response)
}
*/
/* 
  fetches all information related to the current logged in movie
  address, roles, profile image etc
  */
async function searchMoviebyId(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  console.log(
    `fetch request : ${process.env.REACT_APP_BASE_URL}movie?api_key=${process.env.REACT_APP_API_KEY}${id}`
  )
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie?api_key=${process.env.REACT_APP_API_KEY}${params}`,
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
      const error =
        response.statusText ||
        (data.message && data.error && data.error + ': ' + data.message) ||
        data.message ||
        data.error ||
        data
      return Promise.reject(error)
    }
    return data
  })
}
