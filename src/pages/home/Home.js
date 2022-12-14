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
import { ViewportContext } from '../../context'

class Home extends Component {
  static contextType = ViewportContext;

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
    if (!results) return
    let resultList = []
    for (let i = 0; i < this.context.width / 300 && i < results.length; i++) {
      results[i].poster_src =
        'https://image.tmdb.org/t/p/w185' + results[i].poster_path
      const movie = <MoviePoster key={results[i].id} show={results[i]} />
      resultList.push(movie)
    }

    return resultList
  }

  processTop3Results(type, results) {
    if (!results) return
    let resultList = []
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
    if (!results) return
    let resultList = []
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
          let resultList = this.processTop3Results('tv', response.results)
          if (!resultList) return
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
          let resultList = this.processTop3Results('movie', response.results)
          if (!resultList) return
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
          `&include_video=false&page=1&primary_release_year=${new Date().getFullYear()}`
      )
      .then(
        (response) => {

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
        <LandingPage movies={this.state.movieCarousel}/>
        <Box bgcolor="#141316" padding="2em 3em">
          <div className={Style.collageContainer}>
            {this.state.tvCollage}
            {this.state.movieCollage}
          </div>
          <SectionHeading
            title={`Released in ${new Date().getFullYear()}`}
            description="View the latest movies"
          />
          <Box display="flex" justifyContent="space-around">{this.state.recentMovies}</Box>
          <SectionHeading
            title="Popular"
            description="With everyone locked inside, now is an ideal time to catch up on the best movies"
          />
          <Box display="flex" justifyContent="space-around">{this.state.popularMovies}</Box>
          <SectionHeading
            title="Best Dramas"
            description="We all need a little drama in our lives"
          />
          <Box display="flex" justifyContent="space-around">{this.state.bestDramas}</Box>
        </Box>
        <Footer/>
      </Box>
    )
  }
}

export default Home
