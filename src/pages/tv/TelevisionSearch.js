import React, { Component } from 'react'
import Television from '../../components/Television.js'
import Movie from '../movie/Movie.js'
import $ from 'jquery'
import SearchBar from '../../components/SearchBar.js'

class TelevisionSearch extends Component {
  constructor(props) {
    super(props)
    this.performSearch('tv', 'suits')
    this.state = { rows: [] }
    this.searchChangeHandler = this.searchChangeHandler.bind(this)
  }
  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch('tv', searchTerm)
  }
  performSearch(searchType, searchTerm) {
    console.log('Perform search using moviedb')
    const urlString = `https://api.themoviedb.org/3/search/${searchType}?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${searchTerm}`
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log('Fetched data successfully')
        const results = searchResults.results
        var televisionRows = []

        results.forEach((show) => {
          show.poster_src = 'https://image.tmdb.org/t/p/w185' + show.poster_path
          const televisionRow = (
            <Television src={Movie} key={show.id} show={show} />
          )
          televisionRows.push(televisionRow)
        })

        console.log(televisionRows)

        this.setState({ rows: televisionRows })
      },
      error: (xhr, status, err) => {
        console.error('Failed to fetch data')
      }
    })
  }

  render() {
    return (
      <div>
        <SearchBar type="tv" onChange={this.searchChangeHandler} />
        <div className="searchResultCanvas">{this.state.rows}</div>
      </div>
    )
  }
}

export default TelevisionSearch
