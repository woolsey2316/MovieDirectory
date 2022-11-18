import React, { useState, useEffect } from 'react'
import { genreApi } from '../api'

const AppContext = React.createContext({})

const AppState = (props) => {
  const [genre, setGenre] = useState(new Map())

  useEffect(() => {
    genreApi.getGenreDictionary().then(
      (response) => {
        let map = new Map()
        if (!response.genres) return
        response.genres.forEach((elem) => {
          map.set(elem.id, elem.name)
        })
        setGenre(map)
      },
      (error) => {
        console.error('Failed to fetch genre data from api request')
      }
    )
  }, [])

  const store = {
    genre: { get: genre, set: setGenre }
  }

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  )
}
export { AppState, AppContext }
