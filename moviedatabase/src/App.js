import React, { Component } from 'react';
import Style from './App.css';
import Movie from './Movie.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {};
    this.performSearch("ant man");
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <Movie key={movie.id} movie={movie}/>
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
    return (
        <div>
          <table className="title">
            <tbody>
              <tr>
                <td>
                  <img alt="app icon" width="50%" src="green_app_icon.png"/>
                </td>
                <td width="8"/>
                <td>
                  <h1>Pick Me A Movie</h1>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='header'>
          <div><a href="https://www.flaticon.com/authors/freepik" 
          title="Freepik"></a><a href="https://www.flaticon.com/"     
          title="Flaticon"></a></div>
          <img className='logo' src="./ticket.svg" alt="ticket"></img>
            <input classname='search-bar' style={{
              fontSize: 24,
              display: 'inline',
              width: "50%",
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 16,
              borderRadius: 5
            }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term" />
          </div>
          <div className='search-result-canvas'>{this.state.rows}</div>
        </div>
    )
  }
}

export default App;