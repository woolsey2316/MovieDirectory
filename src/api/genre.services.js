import { IsValidJSONString } from '../helpers'
/*
  An api request that returns a dictionary that maps genre id to genre name
*/
export const genreApi = {
  getGenreDictionary
}

async function getGenreDictionary(params) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }

  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
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
