import React, { Component } from 'react'
import MoviePoster from '../../components/MoviePoster.js'
import Style from './Home.module.css'
import TelevisionCollage from './TelevisionCollage.js'
import MovieCollage from './MovieCollage.js'
import { Box, Typography } from '@material-ui/core'
import { discoverApi } from '../../api'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recentMovies: [],
      popularMovies: [],
      bestDramas: [],
      tvCollage: [],
      movieCollage: []
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
        <div
          className={Style.landingPage}
          style={{
            backgroundImage: 'url("landingPageImage.jpg")',
            height: '800px',
            backgroundSize: 'cover',
            textAlign: 'center'
          }}
        >
          <h3 className={Style.mainTitle}>Television & film db</h3>
          <p className={Style.subText}>
            a search engine for tv shows and films
          </p>
        </div>
        <Box bgcolor="#3c3c3c" padding="0px 2em">
          <div className={Style.collageContainer}>
            {this.state.tvCollage}
            {this.state.movieCollage}
          </div>
          <Typography variant="h1" className={Style.categoryTitle}>
            Released in 2020
          </Typography>
          <Box display="flex">{this.state.recentMovies}</Box>
          <Typography variant="h1" className={Style.categoryTitle}>
            Popular
          </Typography>
          <Box display="flex">{this.state.popularMovies}</Box>
          <Typography variant="h1" className={Style.categoryTitle}>
            Best Dramas
          </Typography>
          <Box display="flex">{this.state.bestDramas}</Box>
        </Box>
      </Box>
    )
  }
}

export default Home