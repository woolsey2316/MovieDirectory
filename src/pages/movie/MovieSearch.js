import React, { Component } from 'react'
import Movie from './Movie.js'
import $ from 'jquery'
import SearchBar from '../../components/SearchBar.js'

class MovieSearch extends Component {
  constructor(props) {
    super(props)
    this.performSearch('movie', 'ant man')
    this.state = { rows: [] }
    this.searchChangeHandler = this.searchChangeHandler.bind(this)
  }
  performSearch(searchTerm) {
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${searchTerm}`
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results
        var movieRows = []

        results.forEach((show) => {
          show.poster_src = 'https://image.tmdb.org/t/p/w185' + show.poster_path
          const movieRow = <Movie key={show.id} show={show} />
          movieRows.push(movieRow)
        })

        this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.error('Failed to fetch data')
      }
    })
  }
  searchChangeHandler(event) {
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }
  render() {
    return (
      <div>
        <SearchBar type="movie" onChange={this.searchChangeHandler} />
        <div className="searchResultCanvas">{this.state.rows}</div>
      </div>
    )
  }
}

export default MovieSearch
