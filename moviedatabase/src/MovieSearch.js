import React, {Component} from 'react';
import Style from './App.css';
import Movie from './Movie.js';
import $ from 'jquery';

class MovieSearch extends Component {
    constructor(props) {
      super(props)
      this.state = {scrollingLock: false, rows: []};
      this.performSearch('movie',"ant man");
    }
    performSearch(searchTerm) {
        console.log("Perform search using moviedb" + searchTerm)
        const urlString = `https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${searchTerm}`
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully")
                console.log("Perform search using moviedb" + searchResults.results)
                const results = searchResults.results;
                var movieRows = [];

                results.forEach((show) => {
                    show.poster_src = "https://image.tmdb.org/t/p/w185" + show.poster_path
                    const movieRow = <Movie key={show.id} show={show}/>
                    movieRows.push(movieRow)
                })

                this.setState({rows: movieRows});
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })
    }
    searchChangeHandler(event) {
        console.log(event.target.value)
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)
    }
    render() {
        return <div>
            <div 
              id="search-header" 
              className="header" 
              position={this.state.scrollingLock ? 'fixed' : 'relative'}>
                <img 
                  className="logo" 
                  src="./ticket.svg" 
                  alt="ticket" 
                  href="https://www.flaticon.com/authors/freepik"
                />
                <input 
                className="search-bar" 
                placeholder="Search for Movies..." 
                onChange={this.searchChangeHandler.bind(this)}
                />
            </div>
            <div className="search-result-canvas">
                {this.state.rows}
            </div>
        </div>
    }
}

export default MovieSearch;