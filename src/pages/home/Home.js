import React, { Component } from 'react'
import MoviePoster from '../../components/MoviePoster.js'
import Style from './Home.module.css'
import TelevisionCollage from './TelevisionCollage.js'
import MovieCollage from './MovieCollage.js'
import LandingPage from './LandingPage'
import { Box } from '@material-ui/core'
import Footer from '../../components/Footer'
import { discoverApi } from '../../api'
import { SectionHeading } from '../../components/SectionHeading'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recentMovies: [],
      popularMovies: [],
      bestDramas: [],
      tvCollage: [],
      movieCollage: [],
      movieCarousel: []
    }
  }

  processAPI_Response(results) {
    var resultList = []
    console.log({ results })

    for (let i = 0; i < 5; i++) {
      results[i].poster_src =
        'https://image.tmdb.org/t/p/w185' + results[i].poster_path
      const movie = <MoviePoster key={results[i].id} show={results[i]} />
      resultList.push(movie)
    }

    return resultList
  }

  processTop3Results(type, results) {
    var resultList = []
    switch (type) {
      case 'tv':
        for (let i = 0; i < 3; i++) {
          results[i].poster_src =
            'https://image.tmdb.org/t/p/w500' + results[i].backdrop_path
          resultList.push(results[i])
        }
        break
      case 'movie':
        for (let i = 0; i < 3; i++) {
          results[i].poster_src =
            'https://image.tmdb.org/t/p/w500' + results[i].backdrop_path
          resultList.push(results[i])
        }
        break
      default:
    }

    return resultList
  }

  findPopularMovies(results) {
    var resultList = []
    for (let i = 3; i < 6; i++) {
      results[i].poster_src =
        'https://image.tmdb.org/t/p/original' + results[i].backdrop_path
      resultList.push(results[i])
    }
    return resultList
  }

  loadMainTile() {
    // Load the tv show collage
    discoverApi
      .searchTelevision(
        '&language=en-US&sort_by=popularity.desc&include_adult=false' +
          '&include_video=false&page=1&primary_release_year=2020'
      )
      .then(
        (response) => {
          console.log('Fetched data successfully')
          let resultList = this.processTop3Results('tv', response.results)
          this.setState({
            tvCollage: (
              <TelevisionCollage key={resultList[0].id} showList={resultList} />
            )
          })
        },
        (error) => {
          console.error('Failed to fetch television data from api request')
        }
      )

    // Load the movie tile collage
    discoverApi
      .searchMovie(
        '&language=en-US&sort_by=popularity.desc&include_adult=false' +
          '&include_video=false&page=1&primary_release_year=2020&vote_average.gte=7.5&vote_count.gte=20'
      )
      .then(
        (response) => {
          console.log('Fetched data successfully')
          let resultList = this.processTop3Results('movie', response.results)
          this.setState({
            movieCollage: (
              <MovieCollage key={resultList[0].id} movieList={resultList} />
            )
          })
          this.setState({
            movieCarousel: this.findPopularMovies(response.results)
          })
        },
        (error) => {
          console.error('Failed to fetch movie data from api request')
        }
      )
  }
  /*
   * Find movies belonging to all categories defined in the home page
   */

  performSearch() {
    discoverApi
      .searchMovie(
        '&language=en-US&sort_by=popularity.desc&include_adult=false' +
          '&include_video=false&page=1&primary_release_year=2020'
      )
      .then(
        (response) => {
          console.log('Fetched data successfully')

          this.setState({
            recentMovies: this.processAPI_Response(response.results)
          })
        },
        (error) => {
          console.error('Failed to fetch movie data from api request')
        }
      )

    // Most popular Movie category
    discoverApi
      .searchMovie(
        '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false' +
          '&page=1&vote_average.gte=7.5&vote_count.gte=10'
      )
      .then(
        (response) => {
          console.log('Fetched data successfully')
          this.setState({
            popularMovies: this.processAPI_Response(response.results)
          })
        },
        (error) => {
          console.error('Failed to fetch movie data from api request')
        }
      )
    // Best drama category
    discoverApi
      .searchMovie(
        '&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10'
      )
      .then(
        (response) => {
          console.log('Fetched best drama data successfully')
          this.setState({
            bestDramas: this.processAPI_Response(response.results)
          })
        },
        (error) => {
          console.error('Failed to fetch movie data from api request')
        }
      )
  }

  componentDidMount() {
    this.performSearch()
    this.loadMainTile()
  }

  render() {
    return (
      <Box>
        <LandingPage movies={this.state.movieCarousel} />
        <Box bgcolor="#060f19" padding="2em">
          <div className={Style.collageContainer}>
            {this.state.tvCollage}
            {this.state.movieCollage}
          </div>
          <SectionHeading title="Released in 2020" description="View the latest movies" />
          <Box display="flex">{this.state.recentMovies}</Box>
          <SectionHeading title="Popular" description="With everyone locked inside, now is an ideal time to catch up on the best movies"/>
          <Box display="flex">{this.state.popularMovies}</Box>
          <SectionHeading title="Best Dramas" description="We all need a little drama in our lives" />
          <Box display="flex">{this.state.bestDramas}</Box>
        </Box>
        <Footer />
      </Box>
    )
  }
}

export default Home
