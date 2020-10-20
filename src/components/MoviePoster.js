import React, { useContext } from 'react'
import Style from './MoviePoster.module.css'
import { displayDate } from '../helpers'
import { Box, Typography, withStyles } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { MovieContext } from '../context'

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

export default function MoviePoster(props) {
  const { setLocalStorage, setMovieContext } = useContext(MovieContext)
  
  function viewMovie() {
    setMovieContext(props.show)
    setLocalStorage(props.show)
    window.location.href = `/movies/${props.show.id}`
  }

  if (!props.show) {
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
          props.show.poster_path
            ? 'https://image.tmdb.org/t/p/w185/' + props.show.poster_path
            : img
        }
        style={{
          backgroundRepeat: 'no-repeat',
        }}
        onClick={viewMovie.bind(this)}
      />
      <StyledRating
        name="half-rating"
        defaultValue={props.show.vote_average / 2}
        precision={0.5}
        readOnly
      />
      <Typography variant="h5" onClick={viewMovie.bind(this)}>
        {props.show.title}
      </Typography>
      <Typography variant="body1" color="secondary">
        {displayDate(props.show.release_date)}
      </Typography>
    </Box>
  )
  
}
