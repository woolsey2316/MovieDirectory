import React, {Component} from 'react';
import Style from './App.css';
import Television from './Television.js';
import Movie from './Movie.js';
import $ from 'jquery';

class TelevisionSearch extends Component {

    constructor(props) {
      super(props)
      this.state = {scrollingLock: false, rows: []};
      this.performSearch('tv',"suits");
    }
    
    processAPI_Response(searchType, results) {
        var televisionRows = [];

        results.forEach((show) => {
            show.poster_src = "https://image.tmdb.org/t/p/w185" + show.poster_path
            const televisionRow = <Television src={Movie} key={show.id} show={show}/>
            televisionRows.push(televisionRow)
        })

        console.log(televisionRows);

        this.setState({rows: televisionRows});
    }

    performSearch(searchType, searchTerm) {
        console.log("Perform search using moviedb")
        const urlString = `https://api.themoviedb.org/3/search/${searchType}?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${searchTerm}`
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully")
                const results = searchResults.results;
                this.processAPI_Response(searchType, results);
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
        console.log(this.state.rows);
        
        return <div>
                <div id="search-header" className='header' position={this.state.scrollingLock ? "fixed" : "relative"}>
                    <img className='logo' src="./ticket.svg" alt="ticket" href="https://www.flaticon.com/authors/freepik"></img>
                        <input className='search-bar' placeholder="Search for Television..." ></input>
                    </div>
                <div className='search-result-canvas'>{this.state.rows}</div>
            </div>
        
    }
}

export default TelevisionSearch;