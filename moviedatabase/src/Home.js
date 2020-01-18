import React, {Component} from 'react';
import MoviePoster from './MoviePoster.js';
import Style from './css/home.module.css';
import TelevisionCollage from './TelevisionCollage.js';
import MovieCollage from './MovieCollage.js';
import $ from 'jquery';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {recentMovies:[],popularMovies:[],bestDramas:[],tvCollage:[]}
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

    processTop3Results(results) {
        var resultList = [];

        for (let i = 0; i < 3; i++) {
            results[i].poster_src = "https://image.tmdb.org/t/p/w500" + results[i].backdrop_path
            resultList.push(results[i])
        }

        return <TelevisionCollage key={resultList[0].id} showList={resultList}/>
    }

    processTop3Results_Movie(results) {
        var resultList = [];

        for (let i = 0; i < 3; i++) {
            results[i].poster_src = "https://image.tmdb.org/t/p/w500" + results[i].backdrop_path
            resultList.push(results[i])
        }

        return <MovieCollage key={resultList[0].id} movieList={resultList}/>
    }

    loadMainTile() {
        console.log("loading tv tile collage")
        let urlString = 'https://api.themoviedb.org/3/discover/tv?api_key=1b5adf76a72a13bad99b8fc0c68cb085'+
        '&language=en-US&sort_by=popularity.desc&include_adult=false'+
        '&include_video=false&page=1&primary_release_year=2020'
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully")
                const results = searchResults.results;
                this.setState({tvCollage: this.processTop3Results(results)});
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })

        console.log("loading movie tile collage")
        urlString = 'https://api.themoviedb.org/3/discover/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085'+
        '&language=en-US&sort_by=popularity.desc&include_adult=false'+
        '&include_video=false&page=1&primary_release_year=2020&vote_average.gte=7.5&vote_count.gte=10'
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully")
                const results = searchResults.results;
                this.setState({movieCollage: this.processTop3Results_Movie(results)});
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })
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
        '&page=1&vote_average.gte=7.5&vote_count.gte=10'
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
        urlString = 'https://api.themoviedb.org/3/discover/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10'
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched best drama data successfully")
                const results = searchResults.results;
                this.setState({bestDramas: this.processAPI_Response(results)});
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })
    }

    componentDidMount() {
        this.performSearch();
        this.loadMainTile();
    }

    render() {
        return (
            <div className={Style.homePageContainer}>
                <div className={Style.collageContainer}>
                    {this.state.tvCollage}
                    {this.state.movieCollage}
                </div>

                <h3 className={Style.categoryTitle}>Released in 2020</h3>
                <div className={Style.searchResultRow}>{this.state.recentMovies}</div>
                <h3 className={Style.categoryTitle}>Popular</h3>
                <div className={Style.searchResultRow}>{this.state.popularMovies}</div>
                <h3 className={Style.categoryTitle}>Best Dramas</h3>
                <div className={Style.searchResultRow}>{this.state.bestDramas}</div>
        </div>
        
        )

    }
}

export default Home;