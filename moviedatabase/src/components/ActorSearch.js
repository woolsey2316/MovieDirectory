import React, {Component} from 'react';
import $ from 'jquery';
import Actor from './Actor';
import SearchBar from './SearchBar.js';

class ActorSearch extends Component {

    constructor(props) {
      super(props)
      this.state = {scrollingLock: false, rows: []};
      this.performSearch('Brad');
    }

    processAPI_Response(results) {
        var movieRows = [];

        results.forEach((res) => {
            res.profile_pic = 'https://image.tmdb.org/t/p/w185' + res.profile_path
            const movieRow = <Actor key={res.id} profile={res}/>
            movieRows.push(movieRow)
        })

        this.setState({rows: movieRows});
        return;
    }

    performSearch(searchTerm) {
        console.log('Perform search using moviedb')
        const urlString = `https://api.themoviedb.org/3/search/person?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${searchTerm}`
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log('Fetched data successfully')
                const results = searchResults.results;
                this.processAPI_Response(results);
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
                <SearchBar/>
                <div className="search-result-canvas">{this.state.rows}</div>
            </div>
        )
    }
}

export default ActorSearch;