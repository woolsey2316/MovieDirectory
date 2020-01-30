import React, {Component} from 'react';
import MoviePoster from './MoviePoster.js';
import Style from '../css/home.module.css';
import TelevisionCollage from './TelevisionCollage.js';
import MovieCollage from './MovieCollage.js';
import $ from 'jquery';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recentMovies:[],
            popularMovies:[],
            bestDramas:[],
            tvCollage:[]
        }
    }

    processAPI_Response(results) {
        var resultList = [];

        for (let i = 0; i < 5; i++) {
            results[i].poster_src = 'https://image.tmdb.org/t/p/w185' + results[i].poster_path
            const movie = <MoviePoster key={results[i].id} show={results[i]}/>
            resultList.push(movie)
        }

        return resultList;
    }

    processTop3Results(type, results) {
        var resultList = [];
        switch (type) {
            case 'tv':
                for (let i = 0; i < 3; i++) {
                    results[i].poster_src = 'https://image.tmdb.org/t/p/w500' + results[i].backdrop_path
                    resultList.push(results[i])
                }
                break;
            case 'movie':
                for (let i = 0; i < 3; i++) {
                    results[i].poster_src = 'https://image.tmdb.org/t/p/w500' + results[i].backdrop_path
                    resultList.push(results[i])
                }
                break;
            default:
        }
        
        return resultList;
    }

    loadMainTile() {
        // Load the tv show collage
        let urlString = 'https://api.themoviedb.org/3/discover/tv?api_key=1b5adf76a72a13bad99b8fc0c68cb085'+
        '&language=en-US&sort_by=popularity.desc&include_adult=false'+
        '&include_video=false&page=1&primary_release_year=2020'
        $.ajax({
            url: urlString,
            success: (response) => {
                console.log('Fetched data successfully')
                let resultList = this.processTop3Results('tv',response.results);
                this.setState({
                    tvCollage: <TelevisionCollage key={resultList[0].id} showList={resultList}/>
                });
            },
            error: (xhr, status, err) => {
                console.error('Failed to fetch data')
            }
        })

        // Load the movie tile collage
        urlString = 'https://api.themoviedb.org/3/discover/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085'+
        '&language=en-US&sort_by=popularity.desc&include_adult=false'+
        '&include_video=false&page=1&primary_release_year=2020&vote_average.gte=7.5&vote_count.gte=10'
        $.ajax({
            url: urlString,
            success: (response) => {
                console.log('Fetched data successfully')
                let resultList = this.processTop3Results('movie',response.results);
                this.setState({
                    movieCollage: <MovieCollage key={resultList[0].id} movieList={resultList}/>
                });
            },
            error: (xhr, status, err) => {
                console.error('Failed to fetch data')
            }
        })
    }
    /* 
    * Find movies belonging to all categories defined in the home page
    */
    
    performSearch() {
        console.log('Perform search using moviedb')
        let urlString = 'https://api.themoviedb.org/3/discover/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085'+
        '&language=en-US&sort_by=popularity.desc&include_adult=false'+
        '&include_video=false&page=1&primary_release_year=2020'
        // Most recent movies category 
        $.ajax({
            url: urlString,
            success: (response) => {
                console.log('Fetched data successfully')
                
                this.setState({
                    recentMovies: this.processAPI_Response(response.results)
                });
            },
            error: (xhr, status, err) => {
                console.error('Failed to fetch data')
            }
        })
        // Most popular Movie category
        console.log('Perform search using moviedb')
        urlString = 'https://api.themoviedb.org/3/discover/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085'+
        '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false'+
        '&page=1&vote_average.gte=7.5&vote_count.gte=10'
        $.ajax({
            url: urlString,
            success: (response) => {
                console.log('Fetched data successfully')
                this.setState({
                    popularMovies: this.processAPI_Response(response.results)
                });
            },
            error: (xhr, status, err) => {
                console.error('Failed to fetch data')
            }
        })
        // Best drama category
        console.log('Perform search using moviedb')
        urlString = 'https://api.themoviedb.org/3/discover/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10'
        $.ajax({
            url: urlString,
            success: (response) => {
                console.log('Fetched best drama data successfully')
                this.setState({
                    bestDramas: this.processAPI_Response(response.results)
                });
            },
            error: (xhr, status, err) => {
                console.error('Failed to fetch data')
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
                <div className={Style.searchResultRow}>
                    {this.state.recentMovies}
                </div>
                <h3 className={Style.categoryTitle}>Popular</h3>
                <div className={Style.searchResultRow}>
                    {this.state.popularMovies}
                </div>
                <h3 className={Style.categoryTitle}>Best Dramas</h3>
                <div className={Style.searchResultRow}>
                    {this.state.bestDramas}
                </div>
            </div>
        )
    }
}

export default Home;