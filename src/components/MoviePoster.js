import React, { Component } from 'react'
import Style from './MoviePoster.module.css'
import { displayDate } from '../helpers'
import { Box, Typography, withStyles } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import img from '../assets/images/default_poster.jpg'

const StyledRating = withStyles({
  iconEmpty: {
    color: '#e5e3e4'
  },
  iconFilled: {
    color: '#b03226'
  },
  root: {
    marginTop: '0.4em'
  }
})(Rating)

class MoviePoster extends Component {
  viewMovie() {
    console.log('Trying to view movie')
    const url = 'https://www.themoviedb.org/movie/' + this.props.show.id
    window.location.href = url
  }

  render() {
    if (!this.props.show) {
      return <div />
    }
    return (
      <Box display="flex" flexDirection="column" marginRight="20px">
        <img
          className={Style.image}
          alt="poster"
          height="350"
          width="230"
          src={
            this.props.show.poster_path
              ? 'https://image.tmdb.org/t/p/w185/' + this.props.show.poster_path
              : img
          }
          style={{
            backgroundRepeat: 'no-repeat',
          }}
          onClick={this.viewMovie.bind(this)}
        />
        <StyledRating
          name="half-rating"
          defaultValue={this.props.show.vote_average / 2}
          precision={0.5}
          readOnly
        />
        <Typography variant="h5" onClick={this.viewMovie.bind(this)}>
          {this.props.show.title}
        </Typography>
        <Typography variant="body1" color="secondary">
          {displayDate(this.props.show.release_date)}
        </Typography>
      </Box>
    )
  }
}

export default MoviePoster
