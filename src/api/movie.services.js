import { IsValidJSONString } from '../helpers'
/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to movie data. CRUD operations
  are performed here, as well as login/register.
*/
export const api = {
  searchMovie,
  searchTelevision,
  searchActor
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
async function searchMovie(params) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  console.log('api key : ' + process.env.REACT_APP_API_KEY)
  console.log(`fetch request : https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}${params}`)
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}${params}`,
    requestOptions
  )
  return handleResponse(response)
}

async function searchTelevision(params) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}${params}`,
    requestOptions
  )
  return handleResponse(response)
}

async function searchActor(params) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/actor?api_key=${process.env.REACT_APP_API_KEY}${params}`,
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
