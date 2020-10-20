import React, { useState, useCallback, useEffect } from 'react'

const TelevisionContext = React.createContext()

const TelevisionContextProvider = (props) => {
  const initialState = {
    adult: '',
    backdrop_path: '',
    genres: '',
    id: '',
    original_language: '',
    original_name: '',
    overview: '',
    popularity: '',
    poster_path: '',
    poster_src: '',
    first_air_date: '',
    name: '',
    video: '',
    vote_average: '',
    vote_count: '',
    number_of_seasons: '',
    episode_run_time: ''

  }

  const [television, setTelevision] = useState(
    JSON.parse(localStorage.getItem('television')) || initialState
  )

  const setTelevisionContext = useCallback(
    (newState) => {
      setTelevision(newState)
    },
    [setTelevision]
  )

  const setLocalStorage = useCallback((television) => {
    if (television?.id) {
      localStorage.setItem('television', JSON.stringify(television))
    }
  }, [])

  useEffect(() => {
    const loadTelevisionPage = () => {
      console.log('before changing url, television: ')
      console.log({ television })
      //window.location.href = `/televisions/${television.id}`
    }

    if (television?.id) {
      loadTelevisionPage()
    }
  }, [television])

  const getContextValue = useCallback(
    () => ({ television, setLocalStorage, setTelevisionContext }),
    [television, setLocalStorage, setTelevisionContext]
  )

  return (
    <TelevisionContext.Provider value={getContextValue()}>
      {props.children}
    </TelevisionContext.Provider>
  )
}

export { TelevisionContextProvider, TelevisionContext }
