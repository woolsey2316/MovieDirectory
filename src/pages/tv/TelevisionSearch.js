import React, { useState } from 'react'
import Television from './Television'
import SearchBar from '../../components/SearchBar.js'
import Navigation from '../../components/Navigation.js'

import {useGetTelevisionByNameQuery} from '../../features/television/tv-slice-api'

function TelevisionSearch() {
  const [searchTerm, setSearchTerm] = useState("")

  const {
    data,
  } = useGetTelevisionByNameQuery(searchTerm, {
    refetchOnMountOrArgChange: true,
    skip: false,
  })

  function searchChangeHandler(event) {
    setSearchTerm(event.target.value)
  }
  return (
    <div>
      <Navigation
        bg="dark"
        theme="dark"
        searchBar={
          <SearchBar type="Tv Shows" onChange={searchChangeHandler} />
        }
      />
      <div className="searchResultCanvas">
        {data?.results?.map((show) => {
          return <Television key={show.id} show={show} />
        })}
      </div>
    </div>
  )
}

export default TelevisionSearch
