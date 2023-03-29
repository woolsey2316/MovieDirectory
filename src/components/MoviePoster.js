import React, { useContext } from 'react'
import { displayDate } from '../helpers'
import { makeStyles } from '@material-ui/core/styles'
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

const useStyles = makeStyles((theme) => ({
  image: {
    transition: 'all 0.3s',
    backgroundRepeat: 'no-repeat'
  },
  iconEmpty: {
    color: '#e5e3e4'
  },
  iconFilled: {
    color: '#b03226'
  },
  title : {
    color: '#e8e8e9',
    margin: '0.3em 0',
    maxWidth: '230px',
    cursor: 'pointer',
    '&:hover' : {
      textDecoration: 'underline'
    }
  },
  root: {
    marginTop: '0.4em'
  },
  releaseDate: {
    margin: '0.3em 0'
  }
}))

export default function MoviePoster(props) {
  const styles = useStyles()
  const { setLocalStorage, setMovieContext } = useContext(MovieContext)

  function viewMovie() {
    setMovieContext(props.show)
    setLocalStorage(props.show)
    window.location.href = `/movie/${props.show.id}`
  }

  if (!props.show) {
    return <div />
  }
  return (
    <Box display="flex" flexDirection="column" marginBottom="20px" marginRight="20px">
      <img
        className={styles.image}
        alt="poster"
        height="350"
        width="230"
        src={
          props.show.poster_path
            ? 'https://image.tmdb.org/t/p/w185/' + props.show.poster_path
            : img
        }
        onClick={viewMovie.bind(this)}
      />
      <StyledRating
        name="half-rating"
        defaultValue={props.show.vote_average / 2}
        precision={0.5}
        readOnly
      />
      <Typography
        classes={{ root: styles.title }}
        variant="h5"
        onClick={viewMovie.bind(this)}
      >
        {props.show.title}
      </Typography>
      <Typography
        classes={{root: styles.releaseDate}}
        variant="body1"
        color="secondary"
      >
        {props.show.release_date ? displayDate(props.show.release_date) : '-'}
      </Typography>
    </Box>
  )
}
