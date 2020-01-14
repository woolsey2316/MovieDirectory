import React, {Component} from 'react';
import MoviePoster from './MoviePoster.js';
import Style from './css/home.module.css';
import $ from 'jquery';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {recentMovies:[],popularMovies:[],terribleMovies:[]}
    }

    processAPI_Response(results) {
        var resultList = [];

        results.forEach((show) => {
            show.poster_src = "https://image.tmdb.org/t/p/w185" + show.poster_path
            const movie = <MoviePoster key={show.id} show={show}/>
            resultList.push(movie)
        })

        console.log(resultList);

        return resultList;
    }

    performSearch() {
        console.log("Perform search using moviedb")
        let urlString = 'https://api.themoviedb.org/3/discover/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085'+
        '&language=en-US&sort_by=popularity.desc&include_adult=false'+
        '&include_video=false&page=1&primary_release_year=2020'
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully")
                const results = searchResults.results;
                this.setState({recentMovies: this.processAPI_Response(results)});
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })

        console.log("Perform search using moviedb")
        urlString = 'https://api.themoviedb.org/3/discover/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085'+
        '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false'+
        '&page=1&vote_average.gte=7.5'
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully")
                const results = searchResults.results;
                this.setState({popularMovies: this.processAPI_Response(results)});
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })

        console.log("Perform search using moviedb")
        urlString = 'https://api.themoviedb.org/3/discover/movie?'+
        'api_key=1b5adf76a72a13bad99b8fc0c68cb085'+
        '&language=en-US&include_adult=false&include_video=false'+
        '&page=1&vote_average.tle=1'
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully")
                const results = searchResults.results;
                this.setState({terribleMovies: this.processAPI_Response(results)});
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })
    }

    componentDidMount() {
        this.performSearch();
    }

    render() {
        return (
            <div className={Style.homePageContainer}>
                <h3 className={Style.categoryTitle}>Released in 2020</h3>
                <div className={Style.searchResultRow}>{this.state.recentMovies}</div>
                <h3 className={Style.categoryTitle}>Popular</h3>
                <div className={Style.searchResultRow}>{this.state.popularMovies}</div>
                <h3 className={Style.categoryTitle}>Terrible Movies</h3>
                <div className={Style.searchResultRow}>{this.state.terribleMovies}</div>
        </div>
        
        )

    }
}

export default Home;