import { IsValidJSONString } from '../helpers'
/*
  This section of the services layer relates to television api. Searches for televisions
  tv with certain parameters, popularity, genre and returns a search result list
*/
export const televisionApi = {
  getReviews,
  getSimilarTelevisions,
  getRecommendedTelevisions,
  getCredits,
  getImages,
  getDetails
}

/* 
  fetches all reviews belonging to a television 
  */
async function getReviews(televisionId) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}tv/${televisionId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

/* 
  fetches all cast and crew belonging to a television 
  */
async function getCredits(televisionId) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}tv/${televisionId}/credits?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

async function getSimilarTelevisions(televisionId) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}tv/${televisionId}/similar?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

async function getRecommendedTelevisions(televisionId) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}tv/${televisionId}/reviews?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

async function getImages(televisionId) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}tv/${televisionId}/images?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

async function getDetails(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}tv/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
    requestOptions
  )
  return handleResponse(response)
}

/* 
  checks if the http response from the api is 401 Unauthorized and 
  automatically logs the television out. This handles if the JWT token expires 
  or is no longer valid for any reason.
*/
function handleResponse(response) {
  return response.text().then((text) => {
    const data = IsValidJSONString(text) ? JSON.parse(text) : text

    if (!response.ok) {
      // trying to get as much information about the error as can get
      const error = response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
