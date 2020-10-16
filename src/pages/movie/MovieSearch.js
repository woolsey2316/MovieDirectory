import React, { Component } from 'react'
import Movie from './Movie.js'
import SearchBar from '../../components/SearchBar.js'
import Navigation from '../../components/Navigation.js'

class MovieSearch extends Component {
  constructor(props) {
    super(props)
    this.state = { movies: [] }
    this.searchChangeHandler = this.searchChangeHandler.bind(this)
    console.log({ props })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.props.searchMovie(searchTerm)
  }
  render() {
    return (
      <div>
        <Navigation />
        <SearchBar type="movie" onChange={this.searchChangeHandler} />
        <div className="searchResultCanvas">
          {this.props.movies.movieResults &&
            this.props.movies.movieResults.map((show) => {
              show.poster_src =
                'https://image.tmdb.org/t/p/w185' + show.poster_path
              return <Movie key={show.id} show={show} />
            })}
        </div>
      </div>
    )
  }
}

export default MovieSearch
