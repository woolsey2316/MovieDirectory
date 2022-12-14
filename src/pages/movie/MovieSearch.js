import React, { useState } from 'react'
import Movie from './Movie.js'
import SearchBar from '../../components/SearchBar.js'
import Navigation from '../../components/Navigation.js'

import { useGetMovieByNameQuery } from '../../features/movie/movie-slice-api'

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const {
    data
  } = useGetMovieByNameQuery(searchTerm, {
    refetchOnMountOrArgChange: true,
    skip: false,
  })
  function searchChangeHandler(event) {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)
  }

  return (
    <div>
      <Navigation
        bg="dark"
        theme="dark"
        searchBar={
          <SearchBar type="movies" onChange={searchChangeHandler} />
        }
      />
      <div className="searchResultCanvas">
        {data?.results?.map((show) => {
          return <Movie key={show.id} show={show} />
        })}
      </div>
    </div>
  )
  
}

export default MovieSearch
