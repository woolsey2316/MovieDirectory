import React, { useState, useCallback, useEffect } from 'react'

const MovieContext = React.createContext()

const MovieContextProvider = (props) => {
  
  const initialState= {
    adult: '',
    backdrop_path: '',
    genre_ids: '',
    id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: '',
    poster_path: '',
    poster_src: '',
    release_date: '',
    title: '',
    video: '',
    vote_average: '',
    vote_count: ''
  }

  const [movie, setMovie] = useState(JSON.parse(localStorage.getItem("movie")) || initialState)

  const setMovieContext = useCallback(
    newState => {
      setMovie(newState)
    },
    [setMovie],
  )

  const setLocalStorage = useCallback((movie => {
    if ( movie && movie.id) {
      localStorage.setItem("movie", JSON.stringify(movie))
    }
  }),[])

  useEffect(() => {
    const loadMoviePage = () => {
      console.log('before changing url, movie: ')
      console.log({movie})
      //window.location.href = `/movies/${movie.id}`
    }

    if ( movie && movie.id) {
      loadMoviePage()
    }
    
  }, [movie])

  const getContextValue = useCallback(
    () => ({movie, setLocalStorage, setMovieContext}),
    [movie, setLocalStorage, setMovieContext],
  )
  
  return (
    <MovieContext.Provider value={getContextValue()}>
      {props.children}
    </MovieContext.Provider>
  )
}

export { MovieContextProvider, MovieContext }
